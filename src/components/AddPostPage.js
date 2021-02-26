import React from 'react';
import PostForm from './PostForm'
import {connect} from 'react-redux'
import {addPost} from '../actions/post'

export class AddPostPage extends React.Component{
    onSubmit = (post) => {
        this.props.addPost(post);
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
        addPost: (post) => dispatch(addPost(post))
    }
}

export default connect(undefined,mapDispatchToProps)(AddPostPage)