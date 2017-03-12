import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Dashboard from './components/Dashboard';
import AllUsers from './components/AllUsers';
import NewUserForm from './components/NewUserForm';
import AllSeminars from './components/AllSeminars';
import NewSeminarForm from './components/NewSeminarForm';

export default (
    <Route path="/admin" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/admin/users" component={AllUsers} />
        <Route path="/admin/user/add" component={NewUserForm} />
        <Route path="/admin/seminars" component={AllSeminars} />
        <Route path="/admin/seminar/add" component={NewSeminarForm} />
    </Route>
);