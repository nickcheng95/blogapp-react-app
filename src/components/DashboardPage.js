import React from 'react';
import PostFilterList from './PostFilterList'
import PostList from './PostList'
import { Link } from 'react-router-dom';

export default () => (
    <div>  
        <div className='content-container dashboard__header'>
            <PostFilterList></PostFilterList>
            <Link to='/create' className='button'>Add Post</Link>
        </div>      
        
        <div className='content-container'>
            <PostList className='list-item'></PostList>

        </div>
    </div>
);

