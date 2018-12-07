import React from 'react';
import Users from './Users';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';

export default class Friends extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Users />
                <Footer />
            </div>
        );
    }
}
