import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <section className='notFound'>
            <h4 className='error404'>NOT FOUND 404</h4>
            <p className='backgroundDecoration one'>¿?</p>
            <p className='backgroundDecoration two'>¿?</p>
            <p className='backgroundDecoration three'>¿?</p>
            <p className='backgroundDecoration four'>¿?</p>
            <p className='backgroundDecoration five'>¿?</p>
            <img className='backgroundImage' src='../../Images/footer-background.svg' alt='imagen brand mascot fondo' />
            <Link className='goBackButton' to='/home'>Volver al Home</Link>
        </section>
    )
}

export default NotFound