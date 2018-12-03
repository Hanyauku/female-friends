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
                
                <PageTitle />
                <MainNavBar />
                <NewPost />
                <TopMembers />
                <Footer />
            </div>
        );
    }
}
