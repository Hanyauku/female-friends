import React, { Component } from 'react';
import {Button } from 'reactstrap';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
        <div>
            <div className="col-md-3 widget text-4 widget_text" id="Profile">           
            <Button>Profile</Button>
            </div>
        </div>
    );
  }
}

export default Profile;