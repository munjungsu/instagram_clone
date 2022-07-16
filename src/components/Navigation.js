import React from 'react';
import '../styles/navigation.scss';
import logo from '../images/instagramLogo.png';
import searchIcon from '../images/searchIcon.png'
import Menu from '../components/Menu';
const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="instagram logo" />
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                    <span className="searchText">검색</span>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default Navigation;