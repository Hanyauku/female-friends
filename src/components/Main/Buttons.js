import React, { Component } from 'react';
import {Button } from 'reactstrap';

class Buttons extends Component {
  render() {
    return (
        <div>
            <div className="col-md-3 widget text-4 widget_text" id="Profile">           
            <Button>Profile</Button>
            <Button>Messages</Button>
            <Button>Friends</Button>
            </div>
        </div>
    );
  }
}

export default Buttons;