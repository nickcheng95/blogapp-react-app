import React from 'react';
import readpost from '../selectors/readpost'


class ReadPostPage extends React.Component{
    state={
        readpost: {postTitle:'Blog not found',postContent:''}
    }

    componentDidMount(){
        const postUIDandID = this.props.match.params.id.split('&postid=');
        readpost(postUIDandID[0],postUIDandID[1]).then((snap)=>{
            this.setState(()=>({
                readpost: snap.val()
            }))
        })   
    }
    
    render(){
        return (
            <div>
                <div className='content-container'>
                    <h1 className='read__title'>{this.state.readpost.postTitle}</h1>
                    <h3 className='read__content'>{this.state.readpost.postContent}</h3>
                </div>
            </div>
        )
    }
} 

export default ReadPostPage