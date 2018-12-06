import React, { Component } from 'react';
import {Button } from 'reactstrap';
import './Friends.css';


class Friends extends Component {
  render() {
    return (
        <div>
            <div className="col-md-3 widget text-4 widget_text" id="TopMembers">
            <Button>Friends</Button>
            
            </div>
        </div>
    );
  }
}

export default Friends;