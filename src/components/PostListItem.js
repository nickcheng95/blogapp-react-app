import React from 'react';
import { Link } from 'react-router-dom';

export const PostListItem = (props) => (
    <div>
        <div >
            <Link to={`/edit/${props.id}`} className='list-item__title list-item'>{props.postTitle}</Link>
        </div>
    </div>
)

export default PostListItem