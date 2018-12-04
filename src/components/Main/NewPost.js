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
				console.log(res);
			})
			.catch(err => {
				this.setState({ ...err.response.data }, () => console.log(this.state.errors));
			});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Create New post</h3>
                <label>
                    <h3>Title:
                    <input type="text" title={this.state.title} name="title" onChange={this.handleChange} value={this.state.formData.title}/></h3>
                </label>
                <br />
                <label>
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
