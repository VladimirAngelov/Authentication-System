import {useState, createContext} from 'react'

export const Context = createContext()

export const Store = (props) => {
    const [user, setUser] = useState(null)
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message) => {
        setNotifications([...notifications, message]);
        setTimeout(() => {
            setNotifications(notifications.filter((m) => m !== message));
        }, 2000)
    };

    return (
        <Context.Provider value={{user, setUser, notifications, addNotification}}>
            {props.children}
        </Context.Provider>
    )
}