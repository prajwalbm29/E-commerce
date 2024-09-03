import './footer.css'
import footer_logo from '../assets/logo_big.png'
import insta_icon from '../assets/instagram_icon.png'
import wattsapp_icon from '../assets/whatsapp_icon.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="Footer Logo" />
                <p>BYD</p>
            </div>
            <div>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                        <img src={insta_icon} alt="Instagram Icon" />
                    </div>
                    <div className="footer-icons-container">
                        <img src={wattsapp_icon} alt="Whatts app Icon" />
                    </div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @ 2024 - All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer