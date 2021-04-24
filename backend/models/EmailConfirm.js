const mongoose = require('mongoose')

const emailConfirmSchema = new mongoose.Schema({
    confirmString: {
        type: String,
        required: true
    },
    userId: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('EmailConfirm', emailConfirmSchema)