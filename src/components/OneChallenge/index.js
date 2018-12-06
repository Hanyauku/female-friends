import React from 'react';
import Axios from 'axios';
import NavBar from '../Layout/NavBar';
import OnePagePost from './OnePagePost';
import Footer from '../Layout/Footer';


export default class OneChallenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:8000/api/post/readmore/${this.props.match.params.id}`).then(res => this.setState( {post: res.data} ));
    };

    render() {
        return (
            <div>
                <NavBar />
                <OnePagePost post={this.state.post}/>
                <Footer />
            </div>
        );
    }
}
