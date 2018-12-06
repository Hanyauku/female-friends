import React, { Component } from 'react';
import Axios from 'axios';
import OneUser from './OneUser';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/api/user/getall').then(res => this.setState( {users: res.data} ));
    };

    render() {
        return (
            <div>
                {this.state.users.map(user => (
						<OneUser data={user} />
				))}
            </div>
        )
    }
}
