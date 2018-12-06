import React from 'react';
import {Link} from 'react-router-dom';

export default class OnePostPage extends React.Component {
    render() {
        let user = this.props.post.user;
        let {title, body, createdAt, _id} = this.props.post;
        //let {firstName, lastName} = this.props.post.user;
        //createdAt = createdAt.slice(0, 10);
        return (
            <div key={_id}>
                <h3>{title}</h3>
            </div>
        );
    };
}

/* <div key={this.props.post._id}>
    <h3>{title}</h3>
    <h5>by <Link to={`/friend/${this.props.data.user._id}`}>{firstName} {lastName}</Link></h5>
    <p>{body} <Link to={`/challenge/${_id}`}>Read more...</Link></p>
    <p>Posted at {createdAt}</p>
</div> */
