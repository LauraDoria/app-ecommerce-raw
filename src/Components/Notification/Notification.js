import './Notification.css'
import { useState, createContext, useContext } from 'react'

const Notification = ({ message, severity, otherClass = 'Message' }) => {

    if(message === '') {
        return null
    }
  
    const config = true ? 
    {className: `${severity === 'success' ? 'Success' : 'Error'} ${otherClass || ''}`} : {}

    return (
      <div {...config}>
        { message }
      </div>
    )
}

const NotificationContext = createContext()

const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity}/>
            { children}
        </NotificationContext.Provider>
    )
}

export default NotificationProvider

export const useNotification = () => {
    return useContext(NotificationContext)
}
