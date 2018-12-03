import React from 'react';
import female_logo from '../../image/DarkAqua.jpg';
import facebook from '../../image/iconfinder_facebook.png';
import linkedin from '../../image/iconfinder_linkedin.png';
//import mail from '../../image/iconfinder_mail.png';
import twitter from '../../image/iconfinder_twitter.png';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                
                
                <li>
                    <a href="https://femaleventures.nl/"><img src={female_logo} alt="female ventures" width="60" /></a>
                </li>
                <li>
                    <a href="https://femaleventures.nl/wp-content/uploads/2018/09/AlgVW-FemVentures-juni2018.pdf">Terms and Condition</a>
                </li>
                <li>
                    <a href="https://femaleventures.nl/privacy-main/">Privacy</a>
                </li>
                <li>
                    <a href="mailto:team@femaleventures.nl">Contact</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/femaleventures/"><img src={facebook} alt="facebook" width="40" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/female-ventures/"><img src={linkedin} alt="linkedin" width="40" /></a>
                </li>
                <li>
                    <a href="https://twitter.com/FemVentures"><img src={twitter} alt="twitter" width="40" /></a>
                </li>
                </ul>
            </div>
        );
    }
}
