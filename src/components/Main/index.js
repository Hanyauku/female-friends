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
                    <h1>Main</h1>
                    <p>navbar</p>
                    <p>hello with picture</p>
                    <p>User picture</p>
                    <p>user info</p>
                    <p>create new post</p>
                    <p>5 latest posts</p>
                    <p>top users</p>
                    <p>group members</p>
                    <p>footer</p>
                </div>
            </div>
        );
    }
}

/*                 
                <PageTitle />
                <MainNavBar />
                <NewPost />
                <TopMembers />
                <Footer /> */