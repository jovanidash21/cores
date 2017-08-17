import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './components/Dashboard';
import AllSeminars from './components/AllSeminars';
import NewSeminarForm from './components/NewSeminarForm';
import EditSeminarForm from './components/EditSeminarForm';
import SeminarProfile from './components/SeminarProfile';
import AllSpeakers from './components/AllSpeakers';
import NewSpeakerForm from './components/NewSpeakerForm';
import EditSpeakerForm from './components/EditSpeakerForm';
import SpeakerProfile from './components/SpeakerProfile';
import AllUsers from './components/AllUsers';
import NewUserForm from './components/NewUserForm';
import EditUserForm from './components/EditUserForm';
import UserProfile from './components/UserProfile';

export default (
  <Route path="/admin" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/admin/seminars" component={AllSeminars} />
    <Route path="/admin/seminar/add" component={NewSeminarForm} />
    <Route path="/admin/seminar/:seminarID/edit" component={EditSeminarForm} />
    <Route path="/admin/seminar/:seminarID" component={SeminarProfile} />
    <Route path="/admin/speakers" component={AllSpeakers} />
    <Route path="/admin/speaker/add" component={NewSpeakerForm} />
    <Route path="/admin/speaker/:speakerID/edit" component={EditSpeakerForm} />
    <Route path="/admin/speaker/:speakerID" component={SpeakerProfile} />
    <Route path="/admin/users" component={AllUsers} />
    <Route path="/admin/user/add" component={NewUserForm} />
    <Route path="/admin/user/:userID/edit" component={EditUserForm} />
    <Route path="/admin/user/:userID" component={UserProfile} />
  </Route>
);
