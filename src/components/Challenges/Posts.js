import React, { Component } from 'react';
import Axios from 'axios';
import OnePost from './OnePost';

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/api/post/getallposts').then(res => this.setState( {posts: res.data} ));
    };

    render() {
        return (
            <div>
                {this.state.posts.map(post => (
						<OnePost data={post} />
				))}
            </div>
        );
    }
}
