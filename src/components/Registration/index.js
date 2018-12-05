import React from 'react';
import FormReg from './FormReg';
import Footer from '../Layout/Footer';
import NavBarReg from './NavBarReg';

export default class Registration extends React.Component {
    render() {
        return (
            <div>
                <NavBarReg />
                <FormReg />
                <p>Add terms and conditions</p>
                <Footer />
            </div>
        );
    }
}
