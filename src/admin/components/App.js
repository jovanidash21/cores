import React from 'react';
import SideBar from './SideBar/Index';
import NameList from '../containers/NameList';
import Name from '../containers/Name';

const App = () => (
    <div>
        <SideBar />
        <div className="app-container">
            <h1>Hello&nbsp;<Name /></h1>
            <hr />
            <h1>Names</h1>
            <NameList />
        </div>
    </div>
);

export default App;
