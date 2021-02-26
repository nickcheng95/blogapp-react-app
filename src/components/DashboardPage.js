import React from 'react';
import PostFilterList from './PostFilterList'
import PostList from './PostList'
import { Link } from 'react-router-dom';

export default () => (
    <div>        
        <PostFilterList></PostFilterList>
        <Link to='/create' className='button'>Add Post</Link>
        <PostList></PostList>

    </div>
);

