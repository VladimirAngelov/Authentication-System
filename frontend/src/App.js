import {useEffect, useContext, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./pages/Authentication/Login";
import Registration from "./pages/Authentication/Registration";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader";
import {Context} from "./store/store";
import {getUser} from "./services/authService";
import Notifications from "./components/Notifications/Notifications";

function App() {
    const {user, setUser} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUser()
            .then(user => {
                if (!user.error) {
                    setUser(user)
                }
                setLoading(false)
            })
    }, [setUser])

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="App">
            <Router>
                <Header/>
                <Notifications/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Registration}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
