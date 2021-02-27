import React from 'react';
import {connect} from 'react-redux'


export const ReadPostPage = (props)=>(
    <div>
        <div className='content-container'>
            <h1 className='read__title'>{props.post.postTitle}</h1>
            <h3 className='read__content'>{props.post.postContent}</h3>
        </div>
    </div>
)

const mapStateToProps = (state,props) => ({
    post: state.posts.find((val) => val.id === props.match.params.id)
})

export default connect(mapStateToProps)(ReadPostPage)