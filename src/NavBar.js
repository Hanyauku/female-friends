import React from 'react';
import "./NavBar.css";

export default class NavBar extends React.Component {
    render() {
        return (
            <div>		
            <div className="navbar-fixed">
            <nav className="black darken-4">
                <div className="container">
                    <div className="nav-wrapper">
{/*                         
                        <a href="#sidenav" data-target="mobile-nav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a> */}
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a href="home">WHAT WE DO</a>
                            </li>
                            
                            <li>
                                <a href="event">EVENTS</a>
                            </li>
                            <li>
                                <a href="event">CHALLENGE</a>
                            </li>
                            <li>
                                <a href="blog">NEWS</a>
                            </li>
                            <li>
                                <a href="Challenge">PARTNERS</a>
                            </li>
                            <li>
                                <a href="Donate">CONTACT</a>
                            </li>
                            <li>
                                <a href="Login">DONATE</a>
                            </li>
                            <li>
                                <a href="Login">JOIN US!</a>
                            </li>
                            <li>
                                <a href="Login">LOGIN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
        </div>
        );
    }
}
