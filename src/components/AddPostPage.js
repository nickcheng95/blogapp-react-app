import React from 'react';
import PostForm from './PostForm'
import {connect} from 'react-redux'
import {startAddPost} from '../actions/post'

export class AddPostPage extends React.Component{
    onSubmit = (post) => {
        this.props.startAddPost(post);
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <div className='content-container'>
                    <PostForm onSubmit={this.onSubmit}></PostForm>
                </div>
        
            </div>
        )
    }
} 


const mapDispatchToProps = (dispatch)=>{
    return {
        startAddPost: (post) => dispatch(startAddPost(post))
    }
}

export default connect(undefined,mapDispatchToProps)(AddPostPage)