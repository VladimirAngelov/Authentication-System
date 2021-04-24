const User = require('../models/User')
const EmailConfirm = require('../models/EmailConfirm')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS)
const SECRET = process.env.SECRET
const {strongPasswordPattern, emailPattern, usernamePattern} = require('../utils/constants')

module.exports = {
    registration: async ({username, password, repeatPassword, email}) => {
        const confirmString = require('randomstring').generate(128)

        if (password !== repeatPassword || password === '' || repeatPassword === '') throw {error: 'Please make sure your passwords match.'}

        if (!emailPattern.test(email)) throw {error: 'The email should be valid.'}

        if (!usernamePattern.test(username)) throw {error: 'Username must consist only letters and digits.'}

        if (!strongPasswordPattern.test(password)) throw {error: 'Password does not match the requirements.'}

        const isUsernameExists = await User.findOne({username});

        if (isUsernameExists) throw {error: 'User already exists!'};

        const isEmailExists = await User.findOne({email})

        if (isEmailExists) throw {error: 'Email already exists!'};

        const hash = await bcrypt.hash(password, SALT_ROUNDS)

        const user = await new User({username, email, password: hash}).save()

        await new EmailConfirm({confirmString, userId: user._id}).save()

        return {
            user: {username: user.username, email: user.email, _id: user._id},
            confirmString
        }
    },
    login: async ({username, password}) => {
        const user = await User.findOne({username})

        if (!user) throw {error: 'Wrong username or password.'}

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!isPasswordMatch) throw {error: 'Wrong username or password'}

        if (!user.active) throw {error: 'A confirm email address is required.'}

        return {
            token: jwt.sign({_id: user._id, username: user.username}, SECRET),
            user: {username: user.username, _id: user._id}
        }
    },
    verifyUser: async (confirmString, userId) => {
        const user = await User.findById(userId)

        const userConfirmString = await EmailConfirm.findOne({confirmString})

        const isStringMatch = user._id.toString() === userConfirmString.userId.toString()

        if (isStringMatch) {
            user.active = true
            await EmailConfirm.deleteOne({_id: userConfirmString._id})

            return user.save()
        }
    }
}