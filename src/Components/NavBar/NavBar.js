import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmockup';
import firestoreDataBase from '../../Services/Firebase';
import { getDocs, collection } from 'firebase/firestore';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories) 
        })

        //Usar orderBy por "description"
        /*getDocs(collection(firestoreDataBase, 'categoriesRaw')).then(respuesta => {
            console.log(respuesta)
            const categoriesDataBase = respuesta.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            console.log(categoriesDataBase)
            setCategories(categoriesDataBase)
            console.log(categories)
        })*/
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