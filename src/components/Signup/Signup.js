import "./Signup.scss"
import image from './signup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from "react";
import { AuthContext } from '../AuthContext/AuthContext';
import { home } from "fontawesome";

function Home() {
  
const navigate = useNavigate();
    const { signUp } = useContext(AuthContext);
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       

    };

    const sunbmit = () => {
        if (user && email && password) { 
             signUp(user, email, password);
            console.log("Form Submitted Successfully");
           navigate('/');
            // setFormData({ user: "", email: "", password: "" }); // Reset form
        } else {
            // setErrors(validationErrors);
            console.log("signUp Not  Successfull !")
        }
    }

   
    return (
        <div >
            <Header />
            <div className="main">
                <div class="container" >


                    <div className="main-box">

                        <form onSubmit={handleSubmit}>

                            <h1>Sing up</h1>

                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" placeholder="  User" onChange={(e) => setUser(e.target.value)} required />

                            </div>

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

                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <FontAwesomeIcon icon={faKey} />
                                <input type="text" placeholder="  Repeat your password" required />
                            </div>

                            <div className="remember">
                                <input type="checkbox" id="remember" />
                                <label for="remember">  I agree all statements in Terms of service</label>
                            </div>

                            <button className="btn-b" type="submit" onClick={sunbmit }>Register</button>

                        </form>
                    </div>


                    <div className="image">
                        <img src={image} alt="App Logo" />
                    </div>


                </div>
            </div>

            <Footer />
        </div>


    )
}

export default Home;