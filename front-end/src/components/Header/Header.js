import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {LeftNav, RightNav, NavBar, NavItem} from "./StyleHeader";
import {logout} from "../../services/authService";
import {Context} from "../../store/store";

const Header = () => {
    const {user, setUser, addNotification} = useContext(Context)

    const logoutHandler = () => {
        logout().then(() => {
            setUser(null)
            addNotification('Successfully logout.');
        })
    }

    return (
        <NavBar>
            <LeftNav>
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
            </LeftNav>

            <RightNav>
                {user ?
                    <NavItem>
                        <Link onClick={logoutHandler} to="">Logout</Link>
                    </NavItem> :
                    <>
                        <NavItem>
                            <Link to="/login">Login</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/register">Register</Link>
                        </NavItem>
                    </>
                }
            </RightNav>
        </NavBar>
    )
}

export default Header