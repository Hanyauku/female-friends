import React from 'react';
import Axios from 'axios';
import NavBar from '../Layout/NavBar';
import OnePagePost from './OnePagePost';
import Footer from '../Layout/Footer';
import './css/style.css';

export default class OneChallenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            date: '',
            author: {}
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:8000/api/post/readmore/${this.props.match.params.id}`).then(res => this.setState( {post: res.data, author: res.data.user, date: res.data.createdAt.slice(0, 10)} ));
    };

    render() {
        return (
            <div>
                <NavBar />
                <div className="onePost">
                    <OnePagePost post={this.state.post} author={this.state.author} date={this.state.date}/>
                </div>
                <Footer />
            </div>
        );
    }
}
