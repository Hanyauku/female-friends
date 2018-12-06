import React from 'react';
import Axios from 'axios';

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
            <form onSubmit={this.handleSubmit}>
                {errors.auth && <p>{errors.auth.msg}</p>}
                <h3>Create New post</h3>
                <label>
                    {errors.title && <p>{errors.title.msg}</p>}
                    <h3>Title:
                    <input type="text" title={this.state.title} name="title" onChange={this.handleChange} value={this.state.formData.title}/></h3>
                </label>
                <br />
                <label>
                    {errors.body && <p>{errors.body.msg}</p>}
                    Post:
                    <br />
                    <textarea value={this.state.body} name="body" onChange={this.handleChange} value={this.state.formData.body}/>
                </label>
                <br />
                <input type="submit" value="Post" />
            </form>
        );
    }
}
