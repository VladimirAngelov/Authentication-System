const jwt = require('jsonwebtoken')
// const {SECRET, COOKIE_NAME} = require('../config/config')
const COOKIE_NAME = process.env.COOKIE_NAME
const SECRET = process.env.SECRET
module.exports = () => {
    return (req, res, next) => {
        const token = req.cookies[COOKIE_NAME]

        if (token) {
            jwt.verify(token, SECRET, (err, decoded) => {
                if (err) {
                    res.clearCookie(COOKIE_NAME);
                } else {
                    req.user = decoded;
                }
            })
        }
        next()
    }
}