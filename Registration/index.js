import React from 'react';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Registration from './form';

export default class Register extends React.Component {
    render() {
        return (
            <div>
                
                <NavBar />
                <Registration />
                <Footer />
            </div>
        );
    }
}
