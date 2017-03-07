import React from 'react';
import SideBar from './SideBar/Index';
import NavBar from './NavBar/Index';
import Card from './Card/Index';
import NameList from '../containers/NameList';
import Name from '../containers/Name';
import Footer from './Footer/Index';

const App = () => (
    <div>
        <SideBar />
        <div className="app-container">
            <NavBar />
            <Card />
            <h1>Hello&nbsp;<Name /></h1>
            <hr />
            <h1>Names</h1>
            <NameList />
            <Footer />
        </div>
    </div>
);

export default App;
