import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Signin.scss"
import image from './signin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../AuthContext/AuthContext';
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);
    const [user, setUser] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // let check = signIn(email, password);
        // if (check) {
        //     navigate('/');
        // } else {
        //     navigate('/Signin');
        // }
    };

    const login = () => {
        if ( email && password) { 
             signIn( email, password);
            console.log("Form Submitted Successfully");
           navigate('/');
            // setFormData({ user: "", email: "", password: "" }); // Reset form
        } else {
            // setErrors(validationErrors);
            console.log("signUp Not  Successfull !")
            navigate('/Signin');
        }
    }
    return (
        <div >
            <Header />
            <div className="main">
                <div class="container" >

                    <div className="image">
                        <img src={image} alt="App Logo" />
                    </div>

                    <div className="main-box">

                        <form onSubmit={handleSubmit}>

                            <h1>Sing In</h1>

                            {/* <div className="input-group">
                                <i className="fas fa-user"></i>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="text" placeholder="  User" onChange={(e) => setUser(e.target.value)} required />
                            </div> */}


                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="text" placeholder="  Your Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>


                            <div className="input-group">
                                <i className="fas fa-lock"></i>
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" placeholder="  Password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>

                            <div className="remember">
                                <input type="checkbox" id="remember" />
                                <label for="remember">Remember me</label>
                            </div>

                            <button className="btn-b" type="submit" onClick={login}>Log In</button>

                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;