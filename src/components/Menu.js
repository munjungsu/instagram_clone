import React from 'react';
import '../styles/menu.scss';
import {ReactComponent as Home} from '../images/home.svg';
import {ReactComponent as Polygon} from '../images/polygon.svg';
import {ReactComponent as Plus} from '../images/plus.svg';
import {ReactComponent as Heart} from '../images/heart.svg';
import ProfileIcon from '../components/ProfileIcon';
import image from '../images/2390.jpg';
const Menu = () => {
    return (
        <div className="menu">
            <Home className="icon" />
            <Polygon className="icon" />
            <Plus className="icon" />
            <Heart className="icon" />
            <ProfileIcon iconSize="small" image={image} storyBorder={true}/>
        </div>
    );
};

export default Menu;