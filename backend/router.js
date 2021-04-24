const auth = require('./routers/auth')

module.exports = app => {
    app.use(auth)
}
