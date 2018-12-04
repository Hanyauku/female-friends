import React, { Component } from 'react';
import Axios from 'axios';

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {
                firstName: '',
                lastName: '',
				email: '',
				password: '',
				password_conf: ''
			},
			errors: {}
		};
	}

	changeHandler = e => {
		const formData = this.state.formData;
		formData[e.target.firstName] = e.target.value;
		this.setState({ formData });
	};

	formHandler = e => {
		e.preventDefault();
		Axios.post('http://localhost:8000/api/user/registration', this.state.formData)
			.then(res => {
				this.setState({ success: true });
			})
			.catch(err => {
				this.setState({ ...err.response.data }, () => console.log(this.state.errors));
			});
	};

	render() {
		let { errors, success } = this.state;
		return (
			<div>
				<form onSubmit={this.formHandler}>
					{errors.auth && <p>{errors.auth.msg}</p>}
					{success && <p>You are registered successfully!</p>}
					<h1>Registration</h1>
                    <div>
						{errors.firstName && <p>{errors.firstName.msg}</p>}
						<p>First Name: <input onChange={this.changeHandler} name="firstName" type="text" /></p>
					</div>
                    <div>
						{errors.firstName && <p>{errors.lastName.msg}</p>}
						<p>Last Name: <input onChange={this.changeHandler} name="lastName" type="text" /></p>
					</div>
					<div>
						{errors.email && <p>{errors.email.msg}</p>}
						<p>e-mail: <input type="email" name="email" onChange={this.changeHandler} /></p>
					</div>
					<div>
						{errors.password && <p>{errors.password.msg}</p>}
						<p>Password: <input onChange={this.changeHandler} name="password" type="password" /></p>
					</div>
					<div>
						{errors.password_con && <p>{errors.password_con.msg}</p>}
						<p>Confirm Password: <input onChange={this.changeHandler} name="password_conf" type="password" /></p>
					</div>

					<button type="submit">
						Register & Pay
					</button>
				</form>
			</div>
		);
	}
}
