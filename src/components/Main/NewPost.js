import React from 'react';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        post: {
            title: '',
            body: ''
        },
        error : {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const post = this.state.post;
    this.setState({ post });

  }


  handleSubmit(event) {
    alert('A post was submitted');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create New post</h3>
        <label>
            <h3>Title:
            <input type="text" title={this.state.title} onChange={this.handleInputChange} /></h3>
        </label>
        <br />
        <label>
          Post:
          <br />
          <textarea value={this.state.value} onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewPost;
