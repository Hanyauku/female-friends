import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, Card, CardHeader, UncontrolledTooltip} from 'reactstrap';
import '../Login/css/background.css';

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
			<div className="formContainer">
				<div className="background">
					<div className="RegCard">
						<Col sm="12" md={{ size: 9, offset: 4 }}>
							<Card body>
								<CardHeader tag="h3">JOIN OUR COMMUNITY AND BECOME A FEMALE FRIEND</CardHeader>
								<Form onSubmit={this.formHandler}>
								{errors.auth && <FormFeedback>{errors.auth.msg}</FormFeedback>}
								<FormGroup id="row1" row>
									<Col>
									  	{errors.firstName && <FormFeedback>{errors.firstName.msg}</FormFeedback>}
									  	<Label for="first name">First Name: </Label>{' '}
									  	<Input onChange={this.changeHandler} name="firstName" type="text" />
								   	</Col>
									<Col>
										{errors.firstName && <FormFeedback>{errors.lastName.msg}</FormFeedback>}
										<Label for="last name">Last Name: </Label>
										<Input onChange={this.changeHandler} name="lastName" type="text" />
								  	</Col>
						   		</FormGroup>
						   		<FormGroup id="row1" row>
									<Col>
									  	{errors.email && <FormFeedback>{errors.email.msg}</FormFeedback>}
									  	<Label for="email">e-mail: </Label>
										<Input type="email" name="email" onChange={this.changeHandler} />
								  	</Col>
									<Col>
										{errors.password && <FormFeedback>{errors.password.msg}</FormFeedback>}
									  	<Label for="password">Password: </Label>
										<Input onChange={this.changeHandler} name="password" type="password" />
								  	</Col>
						   		</FormGroup>
						   		<FormGroup id="row1" row>
									<Col>
								  		{errors.password_con && <FormFeedback>{errors.password_con.msg}</FormFeedback>}
								  		<Label for="confirm password">Confirm Password: </Label>
										<Input onChange={this.changeHandler} name="password_conf" type="password" />
								  	</Col>
									<Col><Label for="term" tag="strong">Term and Condition<span id="UncontrolledTooltipExample"> *</span></Label>
									<UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
										By registering for Female Ventures you agree with our terms and conditions
									</UncontrolledTooltip>
									<Label check>
										<Input type="checkbox" />{' '}
										Agree with our Term and Condition
									</Label>
									<p>View our <a href="#">Term and Condition</a></p></Col>
						   		</FormGroup>
						 		<Col sm={{ size: 'auto', offset: 1 }}>
								   	<button id="loginBut" type="submit">
									  	Register & Pay
								   	</button>
								</Col>
							</Form>
						</Card>
				   	</Col>
				</div>
			</div>
		</div>
		);
	}
};



export default withRouter(FormReg);
