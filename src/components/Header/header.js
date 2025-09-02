import { useNavigate } from "react-router-dom";
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCalendarDays, faHouse, faRightToBracket, faSearch, faUser, faUserPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import RK from './RK.png';

import { useContext } from "react";
import { AuthContext } from '../AuthContext/AuthContext';


function Header() {
    const navigate = useNavigate();
    const { user, signOut, isLogin , cartItems} = useContext(AuthContext);



    const Signin = () => {
        console.log("Click");
        navigate('/Signin');

    }
    const Signup = () => {
        navigate('/Signup');
    }
    const Home = () => {
        navigate('/');
    }
    const Product = () => {
        navigate('/Product');
    }
    const Cart = () => {
        navigate('/Cart');
    }
    const Processcart = () => {
        navigate('/Processcart');
    }
    return (
        <div className="na">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* Brand */}
                    {/* <a className="navbar-brand" href="#">ཞıɬų</a> */}
                    <img src={RK} alt="bag-ground" style={{ width: "130px", height: "130px" }} />

                    {/* Mobile toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"

                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar content */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ fontSize: "22px" }}>
                        {/* Nav links */}
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li className="text-center">
                                <a href="#" className="nav-link text-secondary" >
                                    {/* <FontAwesomeIcon icon={faHouse} size="lg" className="mb-1" /> */}
                                    <div onClick={Home}>Home</div>
                                </a>
                            </li>
                            <li className="text-center">
                                <a href="#" className="nav-link text-secondary">
                                    {/* <FontAwesomeIcon icon={faCalendarDays} size="lg" className="mb-1" /> */}
                                    <div>Orders</div>
                                </a>
                            </li>
                            <li className="text-center">
                                <a href="#" className="nav-link text-secondary">
                                    {/* <FontAwesomeIcon icon={faBox} size="lg" className="mb-1" /> */}
                                    <div onClick={Product}>Products</div>
                                </a>
                            </li>

                        </ul>

                        {/* Search & Auth Icons */}
                        <div className="ms-auto d-flex align-items-center mt-md-0">
                            {/* Search bar */}
                            {/* <div className="input-group me-3" style={{ maxWidth: '300px' }}>
                            <span className="input-group-text" id="addon-wrapping">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="addon-wrapping"
                            />
                        </div> */}

                            {/* Sign-in icon */}
                            {/* <a href="#" className="text-primary me-3" title="Login">
                            <FontAwesomeIcon icon={faRightToBracket} size="lg" />
                        </a> */}


                            {/* Sign-up icon */}
                            {/* <a href="#" className="text-primary" title="Sign Up">
                            <FontAwesomeIcon icon={faUserPlus} size="lg" />
                        </a> */}

                        {
                            isLogin ? <button className="btn" style={{ fontSize: "22px" }} onClick={signOut}>Log Out</button> : <>
                               <button className="btn" style={{ fontSize: "22px" }} onClick={Signin}> Signin</button>
                            <button className="btn" style={{ fontSize: "22px" }} onClick={Signup}>Signup</button>
                            </>
                        }

                         
 

                            <a href="#" className="ms-3" title="Cart" >
                                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "28px", color: "black" }} onClick={Cart}  /><span style={{ backgroundColor: 'rgba(209, 125, 35, 0.7)', color: 'white', borderRadius: "35px",paddingLeft: "5px", paddingRight:"5px"}}>{cartItems.length}</span>
                            </a>

                        </div>
                    </div>

                </div>

            </nav>
        </div>


    )
}
export default Header;