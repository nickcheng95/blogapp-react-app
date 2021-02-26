import React from 'react';
import PostForm from './PostForm'
import { Link } from 'react-router-dom';


export const EditPostPage = () => (
    <div>
        <div className='content-container'>
            <Link to='/read/1'>Post readable at: {`http://`}</Link>
            <PostForm></PostForm>
            <button className='button'>Remove Post</button>
        </div>
        
    </div>
)



export default EditPostPage