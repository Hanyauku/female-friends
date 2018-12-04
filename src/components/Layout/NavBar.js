import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {

        return (
            <div>
                <ul>
                    <li>
                        <a href="https://femaleventures.nl/mission/">WHAT WE DO</a>
                    </li>
                    <li>
                        <a href="https://femaleventures.nl/events/">EVENT</a>
                    </li>
                    <li>
                        <a href="https://femaleventures.nl/newsitems/">NEWS</a>
                    </li>
                    <li>
                        <a href="https://femaleventures.nl/partners/">PARTNERS</a>
                    </li>
                    <li>
                        <a href="https://femaleventures.nl/contact/">CONTACT</a>
                    </li>
                    <li>
                        <a href="https://femaleventures.nl/product/donations/">DONATE</a>
                    </li>
                    <li>
                        <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration">Sign up</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
