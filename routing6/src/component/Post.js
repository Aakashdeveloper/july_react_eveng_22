import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                Post Page
            </div>
            <div className="panel-body">
                Post Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  
                Post Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  
                <h2>JavaScript</h2>
                <Link to={`/post/JavaScript?page=1`} className="btn btn-success">Details</Link>
                <h2>React</h2>
                <Link to={`/post/React?page=2`} className="btn btn-warning">Details</Link>
                <h2>Node</h2>
                <Link to={`/post/Node?page=3`} className="btn btn-info">Details</Link>
            </div>
        </div>
    )
}

export default Post;
