import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import firestoreDataBase from '../../Services/Firebase';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDocs(query(collection(firestoreDataBase, 'categoriesRaw'), orderBy('numeroOrden', 'asc'))).then(respuesta => {
            const categoriesDataBase = respuesta.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setCategories(categoriesDataBase)
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
            <Link className='menuItem' to='/cart'>
                <CartWidget />
            </Link>
        </nav>
    )
};

export default NavBar;