import React from 'react';

export default class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            postTitle: props.post ? props.post.postTitle :'',
            postContent: props.post ? props.post.postContent :'',
            error: undefined
        }
    }
    

    onTitleChange = (e) => {
        const postTitle = e.target.value;
        this.setState(()=>({postTitle}))
    }

    onContentChange = (e) => {
        const postContent = e.target.value;
        this.setState(()=>({postContent}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.postTitle || !this.state.postContent){
            this.setState(()=>({error: 'Please provide your post title and content'}))
        }else{
            this.setState(()=>({error: undefined}))
            this.props.onSubmit({
                postTitle: this.state.postTitle,
                postContent:  this.state.postContent
            })
        }
    }

    render(){
        return (
            <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input type='text' placeholder='Post Title' onChange={this.onTitleChange} value={this.state.postTitle}/>
                <input type='text' placeholder='Post Content' onChange={this.onContentChange} value={this.state.postContent}/>
                <div>
                    <button className='button'>Save Post</button>
                </div>
            </form>
        )
    }
}