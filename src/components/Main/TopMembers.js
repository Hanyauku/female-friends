import React, { Component } from 'react';
import Axios from 'axios';
import OneUser from '../Friends/OneUser';
import {Link} from 'react-router-dom';
import { Card, CardBlock, CardTitle } from 'reactstrap';

class TopMembers extends Component {
  constructor(props) {
        super(props);
        this.state = {
            top: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/api/user/top').then(res => this.setState( {top: res.data} ));
        console.log('Hello');
    };    
  render() {
    return (
        
        <div>
            <Card>
                <CardTitle>Top Members</CardTitle>
                    <ul>
                        <li>
                        <Link to={`/friend/${this.props.data}`}>
                            {this.state.top.map(user => (
						      <OneUser data={user}/> 
				            ))}
                         </Link>
                        </li>
                    </ul>
            </Card>
        </div>
     );
  }
}

export default TopMembers;