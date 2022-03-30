import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <div className='logoMenu'>
                <img src='../../Images/logo-icon.svg' alt='imagen logo' className='logoMenuImg'/>
                <h1 className='logoMenuBrandName'>RÄW</h1>
            </div>
                <p className='menuItem'>Productos Faciales</p>
                <p className='menuItem'>Productos Capilares</p>
                <p className='menuItem'>Productos Corporales</p>
            <CartWidget />
        </nav>
    )
};

export default NavBar;