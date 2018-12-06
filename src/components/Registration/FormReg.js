import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import './css/RegStyle.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, Card, CardHeader, UncontrolledTooltip} from 'reactstrap';

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
            <div className="RegBackground">
                <div className="RegCard">
                <Col sm="12" md={{ size: 5, offset: 6 }}>
                    <Card body>
                        <CardHeader tag="h1">Registration</CardHeader>
                        <br />
				            <Form onSubmit={this.formHandler}>
					           {errors.auth && <FormFeedback>{errors.auth.msg}</FormFeedback>}
                        <br/>
                        <FormGroup row>
						      {errors.firstName && <FormFeedback>{errors.firstName.msg}</FormFeedback>}
						      <Label for="first name">First Name: </Label>{' '}
                              <Col>
                                    <Input onChange={this.changeHandler} name="firstName" type="text" />
                               </Col>
					   </FormGroup>
                       <FormGroup row>
						      {errors.firstName && <FormFeedback>{errors.lastName.msg}</FormFeedback>}
						      <Label for="last name">Last Name: </Label>
                              <Col>
                                    <Input onChange={this.changeHandler} name="lastName" type="text" />
                              </Col>
					   </FormGroup>
					   <FormGroup row>
						      {errors.email && <FormFeedback>{errors.email.msg}</FormFeedback>}
						      <Label for="email">e-mail: </Label>
                              <Col>
                                    <Input type="email" name="email" onChange={this.changeHandler} />
                              </Col>
					   </FormGroup>
					   <FormGroup row>
						      {errors.password && <FormFeedback>{errors.password.msg}</FormFeedback>}
						      <Label for="password">Password: </Label>
                              <Col>
                                    <Input onChange={this.changeHandler} name="password" type="password" />
                              </Col>
					   </FormGroup>
					   <FormGroup row>
						      {errors.password_con && <FormFeedback>{errors.password_con.msg}</FormFeedback>}
						      <Label for="confirm password">Confirm Password: </Label>
                              <Col>
                                    <Input onChange={this.changeHandler} name="password_conf" type="password" />
                              </Col>
					   </FormGroup>
                       <br/>
                       <Col sm={{ size: 'auto' }}>
                       <FormGroup check>
                            <Label for="term" tag="strong">Term and Condition<span id="UncontrolledTooltipExample"> *</span></Label>
                            <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                                By registering for Female Ventures you agree with our terms and conditions
                            </UncontrolledTooltip>
                            <br/>
                            <br/>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Agree with our Term and Condition
                            </Label>
                            <br/>
                            <br/>
                            <p>View our <a href="#">Term and Condition</a></p>
                        </FormGroup>
                        </Col>
                        <br/>
                        
                     <Col sm={{ size: 'auto', offset: 6 }}>
					   <button type="submit">
						  Register & Pay
					   </button>
                  
                    </Col>
                    <br/>
				</Form>
                </Card>
               </Col> 
			 </div>
             </div>
		);
	}
}

export default withRouter(FormReg);
