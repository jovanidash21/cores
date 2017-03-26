import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/user/:userID" component={UserProfile} />
    </Route>
);