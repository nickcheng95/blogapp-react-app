import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import AddPostPage from '../components/AddPostPage'
import EditPostPage from '../components/EditPostPage'
import ReadPostPage from '../components/ReadPostPage'


export const history = createHistory()


const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path='/' component={LoginPage} exact={true}/>
            <PrivateRoute path='/dashboard' component={DashboardPage}/>
            <PrivateRoute path='/create' component={AddPostPage}/>
            <PrivateRoute path='/edit/:id' component={EditPostPage}/>
            <Route path='/read/:id' component={ReadPostPage}/>
            <Route component={NotFoundPage} />

        </Switch>
    </Router>
);

export default AppRouter;