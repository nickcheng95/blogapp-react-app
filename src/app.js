// cd desktop/reactjs/blogapp-react-app
// yarn run dev-server
// rm -rf .git (remove all git status, only in git bash)
// heroku config:set FIREBASE_API_KEY=... ......

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter,{history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {login, logout} from './actions/auth'
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css'
import {firebase} from './firebase/firebase'
import LoadingPage from './components/LoadingPage'
import {startSetPost} from './actions/post'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>  
);
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx,document.getElementById('app'));
    hasRendered = true;
  }
}


ReactDOM.render(<LoadingPage />,document.getElementById('app'))

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
      store.dispatch(login(user.uid))
      store.dispatch(startSetPost()).then(()=>{
        renderApp();
        if(history.location.pathname === '/'){
            history.push('/dashboard')
        }
      })
    }else {
      store.dispatch(logout())
      renderApp();
      history.push('/');
  }
})
