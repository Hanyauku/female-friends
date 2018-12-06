import React from 'react';
import Axios from 'axios';
import NavBar from '../Layout/NavBar';
import Posts from '../Challenges/Posts';
import Footer from '../Layout/Footer';

export default class OneFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        Axios.get(`http://localhost:8000/api/post/getallbyid/${this.props.match.params.id}`).then(res => this.setState( {posts: res.data} ));
    };

    render() {
        return (
            <div>
                <NavBar />
                <div>one friend</div>
                <Posts posts={this.state.posts} />
                <Footer />
            </div>
        );
    }
}
