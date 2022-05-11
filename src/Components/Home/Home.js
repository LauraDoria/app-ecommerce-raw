import './Home.css'
//import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

const Home = () => {

    /*const [showButton, setShowButton] = useState('show')
    const [changeClassName, setChangeClassName] = useState('appButtonContainer')
    const [showGallery, setShowGallery] = useState('hide')
    const [showProductDetail, setShowProductDetail] = useState('hide')
    const [showHome, setShowHome] = useState('show')
    const [showNavBar, setShowNavBar] = useState('hide')
    const [showFooter, setShowFooter] = useState('hide')
    const [loading, setLoading] = useState('false')
    
    const galleryButtonHandle = () => {
        setShowButton('hide')
        setChangeClassName('appButtonContainerHide')
        setShowNavBar('show')
        setShowFooter('show')
        setLoading('true')
        setTimeout(() => {
          setShowGallery('show')
          //setShowHome('hide')
          //setShowProductDetail('hide')
          setLoading('false')
        }, 5000)
    }
    onClick={galleryButtonHandle}*/

    return(
        <section className='homeContainer' >
            <Link to='/list' className='link'>RÄW</Link>
        </section>
    )
}

export default Home