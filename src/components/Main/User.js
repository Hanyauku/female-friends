import React from 'react';
import Axios from 'axios';
import './User.css';

import avatar from '../../img/default-placeholder-profile-icon.jpg'

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            errors : {}
        };
    }
    
    render() {
        return (
            <div>
                <h4>Hello, {this.props.user.firstName}</h4>
                <img src={avatar}/>
            </div>
        );
    }
}
