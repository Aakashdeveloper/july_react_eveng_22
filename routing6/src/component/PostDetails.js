import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom';

const PostDetails = () => {
    let params = useParams();
    let [searchParams] = useSearchParams()
    return(
        <div className="panel panel-danger">
        <div className="panel-heading">
            {params.topic} Details Page
        </div>
        <div className="panel-body">
            {params.topic} Details Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  
            {params.topic} Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  
            <h2>You are on page number {searchParams.getAll('page')}</h2>
        </div>
    </div>
    )
}

export default PostDetails;
