import {useState, useRef, useContext} from "react";
import {Redirect, useHistory} from 'react-router-dom'
import {login} from "../../services/authService";
import {validateInput} from "../../utils/validate";
import {Context} from "../../store/store";
import {
    SubmitBtn,
    Container,
    Form,
    FormTitle,
    Input,
    ErrorNotification,
    EmailConfirm
} from "./StyleForms";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user, setUser, addNotification} = useContext(Context)
    const inputFields = useRef()

    const history = useHistory();
    const params = new URLSearchParams(history.location.search);
    const [confirm, email] = [params.get('confirm'), params.get('email')];

    const onSubmitHandler = e => {
        e.preventDefault();

        if (username === '' || password === '') {
            setError('All fields must be valid.')
        } else {
            login({username, password})
                .then(res => {
                    if (res.error) {
                        setError(res.error)
                        inputFields.current.style.border = '1px solid red'
                    } else {
                        addNotification('Successfully logged in.');
                        setUser({username: res.username, _id: res._id})
                    }
                }).catch(() => setUser('Unexpected error'))
        }
    }

    if (error) {
        setTimeout(() => {
            setError('')
        }, 3000)
    }

    if (user) {
        return <Redirect to='/'/>
    }

    return (
        <Container>
            <Form onSubmit={onSubmitHandler}>
                {confirm &&
                <EmailConfirm>
                    {`Please confirm your email at `}
                     <a href={`https://${email.split('@').pop()}`} target="_blank" rel="noopener noreferrer">
                         <strong>{email.split('@').pop()}</strong>
                    </a>
                </EmailConfirm>}
                <FormTitle>Login</FormTitle>
                <Input ref={inputFields} onBlur={validateInput} name="username"
                       onChange={(e) => setUsername(e.target.value.trim())} placeholder="Username"/>
                <Input onBlur={validateInput} name="password" onChange={(e) => setPassword(e.target.value.trim())}
                       placeholder="Password" type="password"/>
                <SubmitBtn type="submit"/>
            </Form>
            <ErrorNotification>{error}</ErrorNotification>
        </Container>
    );
}

export default Login;