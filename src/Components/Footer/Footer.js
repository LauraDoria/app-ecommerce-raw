import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="shopContacto contacto" id="contacto">
            <img src="../../Images/footer-background.svg" alt="imagen mascot de marca" className="footerBackground" />
            <nav className="contactoContainer">
                <Link to="/home" className="backToTop">RÄW</Link>
                <div className="whatsapp redesLink">
                    <a href="https://wa.me/xxxxxxxxxx">
                        <img src="../../Images/whatsapp-logo.svg"  alt="imagen logo Whatsapp" />
                    </a>
                    <a href="https://wa.me/xxxxxxxxxx">Whatsapp</a>
                </div>
                <div className="instagram redesLink">
                    <a href="http://www.instagram.com/raw.cosmetica">
                        <img src="../../Images/instagram-logo.svg" alt="imagen logo Instagram" />
                    </a>
                    <a href="http://www.instagram.com/raw.cosmetica">Instagram</a>
                </div>
                <h4 className="local">*No tenemos local</h4>
                <div className="tarjetas">
                    <h4>*Medios de pago</h4>
                    <div>
                        <img src="../../Images/visaLogo.png" alt="imagen logo Visa" />
                        <img src="../../Images/americanexpressLogo.png" alt="imagen logo American Express" />
                        <img src="../../Images/mastercardLogo.png" alt="imagen logo Mastercard" />
                    </div>
                    <div>
                        <img src="../../Images/cabalLogo.png" alt="imagen logo Cabal" />
                        <img src="../../Images/banelcoLogo.png" alt="imagen logo Banelco" />
                        <img src="../../Images/argencardLogo.png" alt="imagen logo Argencard" />
                    </div>
                    <div>
                        <img src="../../Images/nativaLogo.png" alt="imagen logo Nativa" />
                        <img src="../../Images/rapipagoLogo.png" alt="imagen logo Rapipago" />
                        <img src="../../Images/pagofacilLogo.png" alt="imagen logo Pago Facil" />
                    </div>
                </div>
                <div className="envios">
                    <h4>*Envíos a todo el país</h4>
                    <img src="../../Images/ocaLogo.png" alt="imagen logo Oca" />
                </div>
            </nav>
        </footer>
    )
}

export default Footer