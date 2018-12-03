import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';


function Result(props) {
  return (
    
    props.posts.slice(0, 3).map((post)=>{
      return <div>
                <ul className="users" key={post._id}>
                  <div className="">
                    <h3 className="">  {post.title}</h3>                                                   
                  </div>
              </ul>
            </div>;
        }
      )
    )
}

class getallposts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null, user: null};
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/getallposts/")
      .then(res => this.setState({ posts: res.data }));

    

    axios
      .get("http://localhost:8000/api/user")
      .then(
        function(result) {
          console.log(result);
          this.setState({
            user: result.data,
            error: ""
          });
        }.bind(this)
      )
      .catch(error => console.log(error));
  } 

  render() {
    return (
      <div className="main-container">
          <div className="container">
            <div className="row">
              <div className= "col-xs-12 col-md-6 ">
                {this.state.posts && (
                <Result
                  user={this.state.user}
                  posts={this.state.posts}                 
                />
                )}
              </div>
            </div>
          </div>
      </div>
        
    );
  }
}

export default getallposts;