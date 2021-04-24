import {useState, useContext} from "react";
import {validateInput, submitAndErrorHandler} from '../../utils/validate'
import {strongPasswordPattern, emailPattern} from "../../utils/constants";
import {Context} from "../../store/store";
import {Redirect, useHistory} from "react-router-dom";

import {
    SubmitBtn,
    Container,
    Form,
    FormTitle,
    Input,
    PasswordInfo,
    PasswordInfoContainer,
    ErrorNotification
} from "./StyleForms";

const Registration = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [email, setEmail] = useState('')
    const [showPasswordInfo, setShowPasswordInfo] = useState(false)
    const [error, setError] = useState('')
    const {user} = useContext(Context)
    const history = useHistory();
    const usernamePattern = /^[a-zA-z0-9]{3,}$/;

    if (user) {
        return <Redirect to="/"/>
    }

    const onFocusHandler = e => {
        if (!strongPasswordPattern.test(e.target.value)) {
            setShowPasswordInfo(true)
        }
    }

    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value.trim())
        if (!strongPasswordPattern.test(e.target.value)) {
            setShowPasswordInfo(true)
        } else {
            e.target.style.border = 'none'
            setShowPasswordInfo(false)
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        submitAndErrorHandler(username, email, password, repeatPassword, setError,
            (user) => history.push(`/login?confirm=true&email=${user.email}`))
    }

    if (error) {
        setTimeout(() => {
            setError('')
        }, 3000)
    }

    return (
        <Container>
            <Form onSubmit={onSubmitHandler}>
                <FormTitle>Registration</FormTitle>
                <Input onBlur={validateInput} name="username" onChange={(e) => {
                    if (usernamePattern.test(username)) {
                        e.target.style.border = 'none'
                    }
                    setUsername(e.target.value.trim())
                }}
                       placeholder="Username"/>
                <Input onBlur={validateInput} name="email" onChange={(e) => {
                    if (emailPattern.test(email)) {
                        e.target.style.border = 'none'
                    }
                    setEmail(e.target.value.trim())
                }}
                       placeholder="Email"/>
                <Input onBlur={validateInput} name="password" onFocus={onFocusHandler}
                       onChange={onChangePasswordHandler}
                       placeholder="Password" type="password"/>
                {
                    showPasswordInfo &&
                    <PasswordInfoContainer>
                        <PasswordInfo>
                            Password must be at least 6 characters, must contain 1 or more uppercase,
                            lowercase and digit or special characters.
                        </PasswordInfo>
                    </PasswordInfoContainer>
                }
                <Input onChange={(e) => setRepeatPassword(e.target.value.trim())} placeholder="Repeat Password"
                       type="password"/>
                <SubmitBtn type="submit"/>
            </Form>
            <ErrorNotification>{error}</ErrorNotification>
        </Container>
    );
}

export default Registration;