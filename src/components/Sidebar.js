import React from 'react';
import '../styles/sidebar.scss';
import Sticky from 'react-sticky-el';
import Profile from '../components/Profile';
import Suggestions from './Suggestions';
import Footer from './Footer';
import image from '../images/2390.jpg';
const Sidebar = () => {
    return (
            <Sticky topOffset={-80}>
                <div className="sidebar">
                    <Profile username="mun" caption="jungsu" urlText="Switch" iconSize="big" image={image}/>
                    <Suggestions />
                    <Footer />
                </div>
            </Sticky>
            
            
     
    );
};

export default Sidebar;