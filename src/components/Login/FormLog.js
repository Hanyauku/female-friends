import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class FormLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: ''
            },
            errors: {}
        };
    }

    changeHandler = e => {
        var formData = this.state.formData;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
    };

    formHandler = e => {
        e.preventDefault();
        this.setState({ errors: {} });
        Axios.post('http://localhost:8000/api/user/login', this.state.formData)
            .then(res => {
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ ...err.response.data }, () => console.log(this.state.errors));
            });
    };

    render() {
        let { errors } = this.state;
        return (
            <div>
                <form onSubmit={this.formHandler}>
                    {errors.auth && <p>{errors.auth.msg}</p>}
                    <div>
                        {errors.email && <p>{errors.email.msg}</p>}
                        <p>Email: <input type="email" name="email" onChange={this.changeHandler} placeholder="Email" /></p>
                    </div>
                    <div>
                        {errors.password && <p>{errors.password.msg}</p>}
                        <p>Password: <input onChange={this.changeHandler} name="password" type="password" placeholder="Password" /></p>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

export default withRouter(FormLog);
