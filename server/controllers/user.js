module.exports = {
    user: (req, res) => {
        const db = req.app.get('db');

        db.find_user(req.params.id).then(user => {
            res.status(200).send(user[0])
        }).catch(err => console.log(err))
    },
    edit: (req, res) => {
        const db = req.app.get('db');
        const { firstname, lastname, gender, haircolor, eyecolor, hobby, birthday, birthmonth, birthyear } = req.body;

        db.edit_user(req.params.id, firstname, lastname, gender, haircolor, eyecolor, hobby, birthday, birthmonth, birthyear).then(response => {
            res.status(200).send('Updated')
        }).catch(err => console.log(err))
    },
    getUsers: (req, res) => {
        const db = req.app.get('db');
        db.get_all_users(req.user.id).then(users => {
            res.status(200).send(users)
        }).catch(err => console.log(err))
    },
    pages: (req, res) => {
        const db = req.app.get('db');
        const offset = req.query.page * 8 + 1;

        db.limit_offset(offset).then(friends => {
            res.status(200).send(friends)
        }).catch(err => console.log(err))
    },
    myfriends: (req, res) => {
        const db = req.app.get('db');
        db.get_friends(req.user.id).then(friends => {
            // console.log(friends)
            res.status(200).send(friends)
        }).catch(err => console.log(err))
    },
    recommended: (req, res) => {
        const db = req.app.get('db');
        db.dashboard(req.user.id).then(friends => {
            res.status(200).send(friends)
        }).catch(err => console.log(err))
    },
    add: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.add_friend(req.user.id, id).then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    }
}
