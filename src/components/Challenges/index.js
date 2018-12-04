import React from 'react';
import Footer from '../Layout/Footer';
import NewPost from '../Main/NewPost';
import MainNavBar from '../Layout/MainNavBar';
import Posts from './Posts';

export default class Challenges extends React.Component {
    render() {
        return (
            <div>
                <MainNavBar />
                <NewPost />
                <Posts />
                <Footer />
            </div>
        );
    }
}
