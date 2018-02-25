module.exports = {
    user: (req, res) => {
        const db = req.app.get('db');

        db.find_user(req.params.id).then(user => {
            res.status(200).send(user[0])
        }).catch(err => console.log(err))
    }
}
