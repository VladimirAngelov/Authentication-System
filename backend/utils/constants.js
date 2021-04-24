module.exports = {
    strongPasswordPattern: /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    emailPattern: /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/,
    usernamePattern: /^[a-zA-z0-9]{4,}$/
}