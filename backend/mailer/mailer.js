const nodemailer = require('nodemailer')
const PORT = process.env.PORT
const EMAIL = process.env.EMAIL
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD

const sendMail = (email ,userId, confirmString) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: 'Confirm email',
        html: `<p>Click on this <a href="http://localhost:${PORT}/auth/confirm/${confirmString}/${userId}">Link</a> to activate your account.</p>`
    }

    return transporter.sendMail(mailOptions);
}

module.exports = sendMail