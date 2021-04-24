const express = require('express')
const cookieParser = require('cookie-parser')
const auth = require('../middlewares/auth')

const expressConfig = app => {
    app.use(express.urlencoded({extended: true}))
    app.use(cookieParser())
    app.use(express.json())
    app.use(auth())
}

module.exports = expressConfig
