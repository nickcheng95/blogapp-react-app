import React from 'react';
import PostForm from './PostForm'
import { Link } from 'react-router-dom';
import {startRemovePost,startEditPost} from '../actions/post'
import {connect} from 'react-redux'



export class EditPostPage extends React.Component{
    handleRemove = () => {
        this.props.startRemovePost({id: this.props.post.id});
        this.props.history.push('/')
    }
    handleEdit = (post)=>{
        this.props.startEditPost(this.props.post.id,post);
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <div className='content-container'>
                    <div className='editpage__read'>
                        <Link to={`/read/${this.props.post.id}`}>Post readable at: {`https://blogapp-react-app.herokuapp.com/read/${this.props.post.id}`}</Link>
                    </div>
                    <div>
                        <PostForm onSubmit={this.handleEdit} post={this.props.post}></PostForm>
                        <button className='button button__remove' onClick={this.handleRemove}>Remove Post</button>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch)=>({
    startRemovePost: (data) => dispatch(startRemovePost(data)),
    startEditPost: (id,updates) => dispatch(startEditPost(id,updates))
})

const mapStateToProps = (state,props) => {
    return {
        post: state.posts.find((val) => val.id === props.match.params.id)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EditPostPage)