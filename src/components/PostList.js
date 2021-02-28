import React from 'react';
import PostListItem from './PostListItem'
import {connect} from 'react-redux';
import selectPost from '../selectors/selectors'


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
    posts: selectPost(state.posts,state.filters)
})

export default connect(mapStateToProps)(PostList)
