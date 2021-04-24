import {strongPasswordPattern, emailPattern, usernamePattern} from "./constants";
import {register} from "../services/authService";

export const validateInput = (e) => {
    switch (e.target.name) {
        case 'password':
            if (!strongPasswordPattern.test(e.target.value)) {
                return e.target.style.border = '1px solid red'
            } else {
                e.target.style.border = 'none'
            }
            break;
        case 'email':
            if (!emailPattern.test(e.target.value)) {
                return e.target.style.border = '1px solid red'
            } else {
                e.target.style.border = 'none'
            }
            break;
        case 'username':
            if (!usernamePattern.test(e.target.value)) {
                return e.target.style.border = '1px solid red'
            } else {
                e.target.style.border = 'none'
            }
            break;
    }
}

export const submitAndErrorHandler = (username, email, password, repeatPassword, setError, callback) => {
    if (!usernamePattern.test(username)) {
        setError('Username must consist only letters and digits.')
    } else if (!emailPattern.test(email)) {
        setError('The email should be valid.')
    } else if (!strongPasswordPattern.test(password)) {
        setError('Password does not match the requirements.')
    } else if (password !== repeatPassword || password === '' || repeatPassword === '') {
        setError('Please make sure your passwords match.')
    } else {
        register({username, password, repeatPassword, email})
            .then(user => {
                if (user.error) {
                    setError(user.error)
                } else {
                    callback(user);
                }
            })
            .catch(err => {
                setError(err.error)
            }).catch(() => setError('Unexpected error'))
    }
}