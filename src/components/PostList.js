import React from 'react';
import PostListItem from './PostListItem'
import {connect} from 'react-redux';


export const PostList = (props) => (
    <div>
        {props.posts.length > 0 ? (
            props.posts.map((val)=>{
                return <PostListItem key={val.id} {...val}></PostListItem>
            })
        ):(
            <p>Post your first blog</p>
        ) }
    </div>
)


const mapStateToProps = (state,dispatch)=>({
    posts: state.posts
})

export default connect(mapStateToProps)(PostList)
