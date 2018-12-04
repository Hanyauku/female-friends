import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class FormReg extends Component {
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
		let formData = this.state.formData;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
	};

	formHandler = e => {
		e.preventDefault();
		this.setState({ errors: {} });
		Axios.post('http://localhost:8000/api/user/registration', this.state.formData)
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

export default withRouter(FormReg);
