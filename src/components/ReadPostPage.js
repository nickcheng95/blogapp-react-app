import React from 'react';
import {connect} from 'react-redux'


export const ReadPostPage = (props)=>(
    <div>
        <div>
            <h1>{props.post.postTitle}</h1>
            <h3>{props.post.postContent}</h3>
        </div>
    </div>
)

const mapStateToProps = (state,props) => ({
    post: state.posts.find((val) => val.id === props.match.params.id)
})

export default connect(mapStateToProps)(ReadPostPage)