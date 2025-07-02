import "./Signin.scss"
import React from 'react';
import image from './signin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <div >
            <div className="main">
                <div class="container" >

                    <div className="image">
                        <img src={image} alt="App Logo" />
                    </div>

                    <div className="main-box">

                        <form>

                            <h1>Sing In</h1>

                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" placeholder="  User" required />
                            </div>

                            <div className="input-group">
                                <i className="fas fa-lock"></i>
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" placeholder="  Password" required />
                            </div>

                            <div className="remember">
                                <input type="checkbox" id="remember" />
                                <label for="remember">Remember me</label>
                            </div>

                            <button className="btn-b" type="submit" >Log In</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;