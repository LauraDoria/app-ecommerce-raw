//import './Notification.css'
//import { useState, createContext, useContext } from 'react'

/*const Notification = ({ message, severity, otherClass = 'Message' }) => {

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
    //const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
        setMessage(message)
        //setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} />
            { children}
        </NotificationContext.Provider>
    )
}

export default Notification

export const useNotification = () => {
    return useContext(NotificationContext)
}*/

import './Notification.css'
import { useState, createContext, useContext } from 'react'

const Notification = ({message, showNotification, dismiss}) => {

    if(message === '') {
        return null
    } else {
        return(
            showNotification === 'show'?
            <div className='notificationContainer'>
                <h5 className='notificationMessage'>{message}</h5>
                <input type="button" value="X" className="dismissButton" onClick={dismiss} />
            </div> :
            null
        )
    }
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {

    const [showNotification, setShowNotification] = useState('hide')
    const [message, setMessage] = useState('')

    const dismiss = () => {
        setShowNotification('hide')
    }

    const notificationMessage = (notification) => {
        setMessage(notification)
        setShowNotification('show')
    }

    return(
        <NotificationContext.Provider value={{

            dismiss,

            notificationMessage,

            message,

            showNotification }}>

            <Notification message={message} showNotification={showNotification} dismiss={dismiss} />

            {children}

        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}

export default Notification