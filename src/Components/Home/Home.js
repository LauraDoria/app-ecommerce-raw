import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {

    return(
        <section className='homeContainer' >
            <div className='logoHome'>
                <Link to='/list'>
                    <img src='../../Images/music-toggle-pause-to-play.svg' alt='imagen logo' className='logoHomeImg homeImageOne'/>
                    <img src='../../Images/music-toggle-play-to-pause.svg' alt='imagen logo' className='logoHomeImg homeImageTwo'/>
                </Link>
            </div>
        </section>
    )
}

export default Home