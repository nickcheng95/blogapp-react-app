import React from 'react';
import { Link } from 'react-router-dom';

export const PostListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>{props.postTitle}</Link>
    </div>
)

export default PostListItem