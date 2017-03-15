import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './components/Dashboard';
import AllSeminars from './components/AllSeminars';
import NewSeminarForm from './components/NewSeminarForm';
import EditSeminarForm from './components/EditSeminarForm';
import AllSpeakers from './components/AllSpeakers';
import EditSpeakerForm from './components/EditSpeakerForm';
import AllUsers from './components/AllUsers';
import NewUserForm from './components/NewUserForm';
import EditUserForm from './components/EditUserForm';
import UserProfile from './components/UserProfile';

export default (
    <Route path="/admin" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/admin/seminars" component={AllSeminars} />
        <Route path="/admin/seminar/add" component={NewSeminarForm} />
        <Route path="/admin/seminar/:seminarID" component={EditSeminarForm} />
        <Route path="/admin/speakers" component={AllSpeakers} />
        <Route path="/admin/speaker/:speakerID" component={EditSpeakerForm} />
        <Route path="/admin/users" component={AllUsers} />
        <Route path="/admin/user/add" component={NewUserForm} />
        <Route path="/admin/user/:userID" component={EditUserForm} />
        <Route path="/admin/user/:userID" component={UserProfile} />
    </Route>
);