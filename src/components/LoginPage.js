import React from 'react';
import {startLogin} from '../actions/auth'
import {connect} from 'react-redux'

export const LoginPage = ({startLogin}) => {
    return (
        <div className='box-layout'>
            <div className='box-layout__box'>
                <h1 className='box-layout__title'>Boilerplate</h1>
                <p>sub title potential</p>
                <button onClick={startLogin} className='button'>Login with Google</button>
            </div>
        </div>
    )
    
}

const mapDispactchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined,mapDispactchToProps)(LoginPage)


