import "./NavBar.css";
import logo from "../../assets/Logo - no background.png";
import { useState } from "react";

// TODO

function NavBar(){

    const [menuOpen, setMenuOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    return(
        <nav className="navbar">
            <div className="navbar-container">

                {/* Brand */}
                <div className="navbar-brand">
                    <img src={ logo } width={ 34 } />
                    <p>Peter Szepesi</p>
                </div>

                {/* Hamburger Button */}
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                <div className="left-items-container">
                    <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                        <li>
                            <a href="#home">Home</a>
                        </li>

                        {/* Projects dropdown */}
                        <li
                            className="dropdown"
                            onMouseEnter={() => setProjectsOpen(true)}
                            onMouseLeave={() => setProjectsOpen(false)}
                        >
                            <button className="dropdown-toggle">
                                Projects ▾
                            </button>
                            <ul className={`dropdown-menu ${projectsOpen ? "show" : ""}`}>
                                <li><a href="#weather-app">Weather App</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="#blog">Blog</a>
                        </li>

                        <li>
                            <a href="#support-me">Support Me</a>
                        </li>
                    </ul>
                </div>

                <div className="right-items-container">
                    <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                        <li>
                            <a href="#login">Login</a>
                        </li>
                        <li>
                            <a href="#register">Register</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;