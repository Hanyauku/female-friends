import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {Card,Row,Col,CardHeader,CardTitle,CardText,Button,CardFooter  } from 'reactstrap';
import './onepost.css';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    };

    componentDidMount() {
        Axios.get(`http://localhost:8000/api/comment/countcomments/${this.props.data._id}`).then(res => this.setState( {count: res.data} ));
    };

    render() {
        let {title, body, createdAt, _id} = this.props.data;
        let {firstName, lastName} = this.props.data.user;
        createdAt = createdAt.slice(0, 10);
        body = body.slice(0, 30);
        return (
            <div key={this.props.data._id}>
                {/* <h3>{title}</h3>
                <h5>by <Link to={`/friend/${this.props.data.user._id}`}>{firstName} {lastName}</Link></h5>
                <p>{body} <Link to={`/challenge/${_id}`}>Read more...</Link></p>
                <p>Posted at {createdAt}</p>
                <Link to={`/challenge/${_id}`}>{this.state.count} Comments</Link> */}


  <Card body className="card">
    <CardTitle className="CardTitle" tag="h4">{title}</CardTitle>
    <CardText>{body}</CardText>
    {/* <Button Link to={`/challenge/${_id}`}>Read more</Button> */}
    <footer className="CardFooter">
        Started by: <Link to={`/friend/${this.props.data.user._id}`}>{firstName} {lastName}</Link>|
        Posted at {createdAt}|
    <Link to={`/challenge/${_id}`}>{this.state.count} Comments</Link>|
        <Link to={`/challenge/${_id}`}>Read more...</Link>
    </footer >
    
  </Card>


            </div>
        );
    };
}

