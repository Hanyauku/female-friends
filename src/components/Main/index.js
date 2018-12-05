import React from 'react';
import PageTitle from '../Layout/PageTitle';
import Footer from '../Layout/Footer';
import NewPost from './NewPost';
import TopMembers from './TopMembers';
import MainNavBar from '../Layout/MainNavBar';
import Posts from '../Challenges/Posts';
import Axios from 'axios';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/api/post/getlastposts').then(res => this.setState( {posts: res.data} ));
    };

    render() {
        return (
            <div>
                <div>
                    <MainNavBar />
                    <p>hello with picture</p>
                    <p>User picture</p>
                    <p>user info</p>
                    <NewPost />
                    <Posts posts={this.state.posts}/>
                    <p>top users</p>
                    <p>group members</p>
                    <Footer />
                </div>
            </div>
        );
    }
}
