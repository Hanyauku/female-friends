import React, { Component } from 'react';
import Axios from 'axios';
import OneUser from './OneUser';
import { CardColumns, CardImg, CardTitle, Card } from 'reactstrap';
import {Link} from 'react-router-dom';
import avatar from '../../img/default-placeholder-profile-icon.jpg'
import '../Login/css/background.css';




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
                <CardColumns>
                    {this.state.users.map(user => (
                        <div>
                            <Card id="card_users">
                                <CardImg top width="100%"  src={avatar} alt="avatar"></CardImg>
                                <Link to={`/friend/${user._id}`}>
						              <CardTitle><OneUser data={user} /></CardTitle>
                                </Link>
                                <button id="loginBut">Add Friend</button><button id="loginBut">Message</button>
                            </Card>
                        </div>
				    ))}
                </CardColumns>
            </div>
            )
        }
    }
