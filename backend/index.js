require('dotenv').config()
const app = require('express')()
const PORT = process.env.PORT
const DB_URI = process.env.DB_URI
const expressConfig = require('./config/express')
const Router = require('./router')
const database = require('./config/mongoose')

expressConfig(app)
Router(app)
database(DB_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
    }).catch(() => console.log('Failed to connect with database'))