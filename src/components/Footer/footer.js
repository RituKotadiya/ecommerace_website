import "./footer.scss"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faSquareTwitter,  faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer class="footer">
            <div class="newsletter">
                <h3>Newsletter</h3>
                <p>Stay up to date with our latest news and updates.</p>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            <div class="footer-links">
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Order Status</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="#">Write to us</a></li>
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Live Chat</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; @ 2025 techamdavad.com</p>
                <div class="social-icons" >
                    <a href="#" aria-label="Facebook" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                    <a href="#" aria-label="LinkedIn" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="#" aria-label="Twitter" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faSquareTwitter} />
                    </a>
                    <a href="#" aria-label="Twitter" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                </div>
            </div>
        </footer >


    )
}

export default Footer;