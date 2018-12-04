import React from 'react';
import PageTitle from '../Layout/PageTitle';
import Footer from '../Layout/Footer';
import NewPost from './NewPost';
import TopMembers from './TopMembers';
import NavBar from '../Layout/NavBar';
import './Main.css';
export default class Main extends React.Component {
    render() {
        return (
            
            <div>
                <NavBar/>
                <center>
                    <h1>Main</h1>
                    <p>hello with picture</p>
                    <p>User picture</p>
                    <p>user info</p>
                    <p>create new post</p>
                    <p>5 latest posts</p>
                    <TopMembers/>
                    <p>group members</p>
                    <Footer />
                </center>
                
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