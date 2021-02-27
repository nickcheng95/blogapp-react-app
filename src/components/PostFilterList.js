import React from 'react';
import {connect} from 'react-redux'
import {setTextFilter,sortByTitleDown,sortByTitleUp} from '../actions/filters'


export class PostFilterList extends React.Component{

    onTextChange = (e) => {
        const text = e.target.value;
        this.props.setTextFilter(text)
    }

    onSortChange = (e) => {
        const sortBy = e.target.value;
        if(sortBy==='up'){
            this.props.sortByTitleUp()
        }else{
            this.props.sortByTitleDown()
        }
    }
    

    render(){
        return (
            <div>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <input type='text' className='text-input' placeholder='search post' value={this.props.filters.text} onChange={this.onTextChange}></input>
                    </div>
                    <div className='input-group__item'>
                        <select onChange={this.onSortChange} value={this.props.filters.sortBy} className='select'>
                            <option value='up'>Title Up</option>
                            <option value='down'>Title Down</option>    
                        </select>
                    </div>
                </div>              
            </div>
        )
    }
}

const mapStateToProps = (state)=>({filters: state.filters});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByTitleUp: () => dispatch(sortByTitleUp()),
    sortByTitleDown: () => dispatch(sortByTitleDown())
})

export default connect(mapStateToProps,mapDispatchToProps)(PostFilterList)