import { createContext, useCallback, useEffect, useState } from "react"
import Notification from "../components/Notification"

export const Notif = createContext(null)

const NotificationContext = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState('')
    const [type, setType] = useState('info')

    const notifMe = ({ msg, status, type }) => {
        setMsg(msg)
        setOpen(status)
        setType(type)
    }

    const check = useCallback(() => {
        setTimeout(() => {
            setMsg('')
            setOpen(false)
        }, 1500);
    }, [open, msg])


    useEffect(() => {
        check()
    }, [check])

    return (
        <Notif.Provider value={{ open, notifMe }}>
            {children}
            <Notification open={open} setOpen={setOpen} message={msg} type={type} />
        </Notif.Provider>
    )

}

export default NotificationContext