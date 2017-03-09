import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Dashboard from './components/Dashboard';
import NewUserForm from './components/NewUserForm';

export default (
    <Route path="/admin" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/admin/user/add" component={NewUserForm} />
    </Route>
);