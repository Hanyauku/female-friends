import React from 'react';
import Axios from 'axios';
import {Button,Label,Input,FormGroup } from 'reactstrap';

export default class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: '',
                body: ''
            },
            errors : {}
        };
    }

    handleChange = e => {
        let formData = this.state.formData;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
    }

    handleSubmit = e => {
        e.preventDefault();
		this.setState({ errors: {} });
		Axios.post('http://localhost:8000/api/post/addpost', this.state.formData)
			.then(res => {
                this.setState({ formData: { title: '', body: ''}});
			})
			.catch(err => {
				this.setState({ ...err.response.data }, () => console.log(this.state.errors));
			});
    }

    render() {
        let { errors } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 widget text-4 widget_text" id="NewPost">
                        <h3>Create New post</h3><hr/>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label>
                                    {errors.title && <p>{errors.title.msg}</p>}
                                    <Input type="text" title={this.state.title} name="title" onChange={this.handleChange} value={this.state.formData.title}  className="input"/>
                                </Label>
                                <Label>
                                    {errors.body && <p>{errors.body.msg}</p>}
                                    <textarea value={this.state.body} name="body" onChange={this.handleChange} value={this.state.formData.body} className="textarea"/>
                                </Label>
                            </FormGroup>
                            <Button type= "submit" value="post">Post</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
