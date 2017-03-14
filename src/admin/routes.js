import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './components/Dashboard';
import AllSeminars from './components/AllSeminars';
import NewSeminarForm from './components/NewSeminarForm';
import EditSeminarForm from './components/EditSeminarForm'
import AllUsers from './components/AllUsers';
import NewUserForm from './components/NewUserForm';
import UserProfile from './components/UserProfile';

export default (
    <Route path="/admin" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/admin/seminars" component={AllSeminars} />
        <Route path="/admin/seminar/add" component={NewSeminarForm} />
        <Route path="/admin/seminar/:seminarID" component={EditSeminarForm} />
        <Route path="/admin/users" component={AllUsers} />
        <Route path="/admin/user/add" component={NewUserForm} />
        <Route path="/admin/user/:userID" component={UserProfile} />
    </Route>
);