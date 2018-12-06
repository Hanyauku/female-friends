import React from 'react';
import FormReg from './FormReg';
import Footer from '../Layout/Footer';
import NavBar from '../Layout/NavBar';

export default class Registration extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <FormReg />
                <Footer />
            </div>
        );
    }
}
