require('dotenv').config();
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive');

const { SERVER_PORT, SECRET, AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, AUTH_CALLBACK_URL, CONNECTION_STRING } = process.env;
const userController = require('./controllers/user');

app.use(bodyParser.json());

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: AUTH_DOMAIN,
    clientID: AUTH_CLIENT_ID,
    clientSecret: AUTH_CLIENT_SECRET,
    callbackURL: AUTH_CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // console.log(profile);
    let { given_name, family_name, picture, nickname } = profile._json;
    const db = app.get('db');

    db.find_user([nickname]).then(function (users) {
        if (!users[0]) {
            db.create_user([nickname, given_name, family_name, picture]).then(user => {
                return done(null, users[0].id)
            }).catch(err => console.log)
        } else {
            return done(null, users[0].id)
        }
    })
}));

passport.serializeUser((id, done) => {
    done(null, id);
})

passport.deserializeUser((id, done) => {
    app.get('db').find_user([id])
        .then(function (user) {
            return done(null, user[0])
        })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: '/auth'
}));

app.get('/auth/me', (req, res, next) => {
    if (!req.user) {
        return res.status(404).send('User not found')
    } else {
        return res.status(200).send(req.user)
    }
})

app.get('/auth/logout', function (req, res) {
    req.logOut();
    res.redirect('http://localhost:3000/')
})


app.get('/api/profile/:id', userController.user);
app.put('/api/profile/:id', userController.edit);

app.get('/api/count', userController.count);
app.get('/api/friends', userController.pages)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`Hello, Brittany. Coming at you live from ${SERVER_PORT}!`)
    })
})