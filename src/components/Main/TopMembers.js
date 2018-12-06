import React, { Component } from 'react';
import Axios from 'axios';
import OneUser from '../Friends/OneUser';
import {Link} from 'react-router-dom';
import { Card,CardText, CardBlock, CardTitle } from 'reactstrap';

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
                <CardTitle><b>Top Members</b></CardTitle>

                      
                            {this.state.top.map(user => (
                            <Link to={`/friend/${this.props.data}`}>
						    <OneUser data={user}/> </Link>
				            ))}
            </Card>
        </div>
     );
  }
}

export default TopMembers;