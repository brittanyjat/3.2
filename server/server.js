require('dotenv').config();
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');

const { SERVER_PORT, SECRET, AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, AUTH_CALLBACK_URL } = process.env;

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
    let { displayName, user_id, picture } = profile._json;
    done(null, profile)
}));

passport.serializeUser((profile, done) => {
    done(null, profile);
})

passport.deserializeUser((profile, done) => {
    done(null, profile);
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: '/auth'
}));

console.log(session)


app.listen(SERVER_PORT, () => {
    console.log(`Hello, Brittany. Coming at you live from ${SERVER_PORT}!`)
})