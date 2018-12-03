import React from 'react';
import { NavLink } from 'react-router-dom';

export default class MainNavBar extends React.Component {
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
                        <NavLink to="/challenges">CHALLENGES</NavLink>
                    </li>
                    <li>
                        <NavLink to="/friends">FEMALE FRIENDS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration">Log Out</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
