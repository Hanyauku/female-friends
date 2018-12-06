import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class OneUser extends Component {
    render() {
        return (
            <div key={this.props.data._id}>
                
                <p>{this.props.data.firstName} {this.props.data.lastName}</p>
                
            </div>
        );
    }
}