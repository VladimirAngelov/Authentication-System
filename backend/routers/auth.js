const router = require('express').Router()
const {registration, login, verifyUser} = require('../services/authServices')
const COOKIE_NAME = process.env.COOKIE_NAME
const sendMail = require('../mailer/mailer')
const path = require('path')

router.get('/auth/getUser', (req, res) => {
    const user = req.user;

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json({error: 'User not found'})
    }
})

router.post('/auth/register', (req, res) => {
    registration(req.body)
        .then(data => {
            sendMail(data.user.email, data.user._id, data.confirmString)
                .then(() => {
                    res.status(201).json(data.user)
                }).catch((err) => console.log(err))
        }).catch(err => res.json(err))
})

router.post('/auth/login', (req, res) => {
    login(req.body)
        .then(data => {
            res.status(200)
                .cookie(COOKIE_NAME, data.token, {httpOnly: true, secure: true})
                .json(data.user)
        }).catch(err => res.json(err))
})

router.post('/auth/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME).status(200).json({message: 'Successfully logout.'})
})

router.get('/auth/confirm/:string/:userId', (req, res) => {
    const confirmString = req.params.string;
    const userId = req.params.userId

    verifyUser(confirmString, userId)
        .then(user => {
            if (user.active) res.sendFile(path.join(__dirname, '../public', 'emailConfirmPage.html'))
        }).catch(err => console.log(err))
})

module.exports = router