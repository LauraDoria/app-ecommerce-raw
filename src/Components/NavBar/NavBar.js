import './NavBar.css';
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmockup';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories) 
        })
    }, []) 

    return (
        <nav className='navBar'>
            <div className='logoMenu'>
                <Link to='/home'>
                    <img src='../../Images/music-toggle-pause-to-play.svg' alt='imagen logo' className='logoMenuImg imageOne'/>
                    <img src='../../Images/music-toggle-play-to-pause.svg' alt='imagen logo' className='logoMenuImg imageTwo'/>
                </Link>
                <Link to='/home' className='logoMenuBrandName'>RÄW</Link>
            </div>
            {categories.map(category => <Link key={category.id} to={category.path} className='menuItem'>{category.description}</Link>)}
            {/* <Link to={`/detail/productoFacial`} className='menuItem'>Productos Faciales</Link>
            <Link to={`/category/productoCapilar`} className='menuItem'>Productos Capilares</Link>
            <Link to={`/category/productoCorporal`} className='menuItem'>Productos Corporales</Link> */}
            <CartWidget />
        </nav>
    )
};

export default NavBar;