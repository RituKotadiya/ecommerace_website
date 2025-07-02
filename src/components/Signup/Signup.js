import "./Signup.scss"
import React from 'react';
import image from './signup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <div >
            <div className="main">
                <div class="container" >


                    <div className="main-box">

                        <form>

                            <h1>Sing up</h1>

                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" placeholder="  User" required />
                            </div>

                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="text" placeholder="  Your Email" required />
                            </div>

                            <div className="input-group">
                                <i className="fas fa-lock"></i>
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" placeholder="  Password" required />
                            </div>

                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <FontAwesomeIcon icon={faKey} />
                                <input type="text" placeholder="  Repeat your password" required />
                            </div>

                            <div className="remember">
                                <input type="checkbox" id="remember" />
                                <label for="remember"> I agree all statements in Terms of service</label>
                            </div>

                            <button className="btn-b" type="submit" >Register</button>

                        </form>
                    </div>

                   
                        <div className="image">
                            <img src={image} alt="App Logo" />
                        </div>
                   

                </div>
            </div>

        </div>


    )
}

export default Home;