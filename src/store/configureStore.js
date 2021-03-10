import {createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import postReducer from '../reducers/post'
import filterReducer from '../reducers/filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(
        combineReducers({
            auth: authReducer,
            posts: postReducer,
            filters: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );

    return store;
}

