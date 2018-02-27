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

        console.log(req.user.id)
        db.get_all_users(req.user.id).then(users => {
            res.status(200).send(users)
        }).catch(err => console.log(err))
    }
}
