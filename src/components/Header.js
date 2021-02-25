import React from 'react';
import { Link } from 'react-router-dom';
import {startLogout} from '../actions/auth'
import {connect} from 'react-redux'


export const Header = ({startLogout}) => (
    <header className='header'>
        <div className='content-container'>
            <div className='header__content'>
                <Link to='/dashboard' className='header__title'>
                <h1>My Blog</h1>
                </Link>
                <button onClick={startLogout} className='button button__link'>Logout</button>  
            </div>
        </div> 
    </header>

)


const mapDispactchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispactchToProps)(Header)

