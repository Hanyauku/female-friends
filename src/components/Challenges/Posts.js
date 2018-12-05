import React, { Component } from 'react';
import OnePost from './OnePost';

export default class Contacts extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map(post => (
						<OnePost data={post} />
				))}
            </div>
        );
    }
}
