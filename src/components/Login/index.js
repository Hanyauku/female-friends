import React from 'react';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import FormLog from './FormLog';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <FormLog />
                <Footer />
            </div>
        );
    }
}
