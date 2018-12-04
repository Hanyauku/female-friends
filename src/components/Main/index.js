import React from 'react';
import PageTitle from '../Layout/PageTitle';
import Footer from '../Layout/Footer';
import NewPost from './NewPost';
import TopMembers from './TopMembers';
import MainNavBar from '../Layout/MainNavBar';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <MainNavBar />
                    <p>hello with picture</p>
                    <p>User picture</p>
                    <p>user info</p>
                    <NewPost />
                    <p>5 latest posts</p>
                    <p>top users</p>
                    <p>group members</p>
                    <Footer />
                </div>
            </div>
        );
    }
}
