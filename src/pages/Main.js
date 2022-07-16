import React from 'react';
import '../styles/main.scss';
import Navigation from '../components/Navigation';
import Cards from '../components/Cards';
import Sidebar from '../components/Sidebar';
const Main = () => {
    return (
        <div className="main">
            <Navigation />
            <main>
            <div className="container">
                <Cards />
                <Sidebar />
            </div>
        </main>
        </div>
    );
};

export default Main;