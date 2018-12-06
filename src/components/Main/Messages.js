import React, { Component } from 'react';
import {Button } from 'reactstrap';
import './Messages.css';

class Messages extends Component {
  render() {
    return (
        <div>
            <div className="col-md-3 widget text-4 widget_text" id="Messages">          
            <Button>Messanges</Button>          
            </div>
        </div>
    );
  }
}

export default Messages;