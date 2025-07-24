import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCalendarDays, faHouse, faRightToBracket, faSearch, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Brand */}
                <a className="navbar-brand" href="#">ཞıɬų</a>

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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Nav links */}
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li className="text-center">
                            <a href="#" className="nav-link text-secondary">
                                <FontAwesomeIcon icon={faHouse} size="lg" className="mb-1" />
                                <div>Home</div>
                            </a>
                        </li>
                        <li className="text-center">
                            <a href="#" className="nav-link text-secondary">
                                <FontAwesomeIcon icon={faCalendarDays} size="lg" className="mb-1" />
                                <div>Orders</div>
                            </a>
                        </li>
                        <li className="text-center">
                            <a href="#" className="nav-link text-secondary">
                                <FontAwesomeIcon icon={faBox} size="lg" className="mb-1" />
                                <div>Products</div>
                            </a>
                        </li>
                        <li className="text-center">
                            <a href="#" className="nav-link text-secondary">
                                <FontAwesomeIcon icon={faUser} size="lg" className="mb-1" />
                                <div>Customers</div>
                            </a>
                        </li>
                    </ul>

                    {/* Search & Auth Icons */}
                    <div className="ms-auto d-flex align-items-center mt-md-0">
                        {/* Search bar */}
                        <div className="input-group me-3" style={{ maxWidth: '300px' }}>
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
                        </div>

                        {/* Sign-in icon */}
                        <a href="#" className="text-primary me-3" title="Login">
                            <FontAwesomeIcon icon={faRightToBracket} size="lg" />
                        </a>

                        {/* Sign-up icon */}
                        <a href="#" className="text-primary" title="Sign Up">
                            <FontAwesomeIcon icon={faUserPlus} size="lg" />
                        </a>
                    </div>
                </div>
            </div>

        </nav>



    )
}
export default Header;