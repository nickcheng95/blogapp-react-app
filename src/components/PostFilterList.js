import React from 'react';
import {connect} from 'react-redux'


export class PostFilterList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            sortBy:'up'
        }
    };

    onTextChange = (e) => {
        const text = e.target.value;
        this.setState(()=>({text}))
    }

    

    render(){
        return (
            <div>
                <input type='text' placeholder='search post' onChange={this.onTextChange}></input>
                <select>
                    <option value='up'>Title Up</option>
                    <option value='down'>Title Down</option>    
    
                </select>
            </div>
        )
    }
}

export default connect()(PostFilterList)