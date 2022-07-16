import React from 'react';
import '../styles/suggestions.scss';
import Profile from './Profile';
const Suggestions = () => {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">Suggestions</div>
                <a href="/">See All</a>
            </div>
            <Profile  caption="Followed by mapvalut + 3 more" urlText="follow" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile  caption="Followed by mapvalut + 3 more" urlText="follow" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile  caption="Followed by mapvalut + 3 more" urlText="follow" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile  caption="Followed by mapvalut + 3 more" urlText="follow" iconSize="medium" captionSize="small" storyBorder={true}/>
            
        </div>
    );
};

export default Suggestions;