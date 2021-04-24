const mongoose = require('mongoose')

module.exports = (DB_URI) => {
    mongoose.connection.once('open', () => console.log(`Connected to database!`))

    return mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
}