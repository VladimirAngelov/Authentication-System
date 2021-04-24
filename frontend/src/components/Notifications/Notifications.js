import {useContext} from 'react'
import {Context} from "../../store/store";
import {Notification} from "../../pages/Authentication/StyleForms";

const Notifications = () => {
    const {notifications} = useContext(Context)

    return (
        <span className="notifications-container">
            {notifications.map((msg, i) => <Notification key={i}><p>{msg}</p></Notification>)}
        </span>
    )
}

export default Notifications