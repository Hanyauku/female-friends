import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <p>{this.props.data.title}</p>
                <p>{this.props.data.user.firstName}</p>
            </div>
        );
    }
}
