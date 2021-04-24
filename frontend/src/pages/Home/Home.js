import {useContext} from 'react'
import {Context} from "../../store/store";
import {Title} from "./StyleHome";

const Home = () => {
    const {user} = useContext(Context)

    return (
        <>
            <Title>
                {user ? `Welcome, ${user.username}!` : 'Guest Homepage'}
            </Title>
        </>
    )
}

export default Home