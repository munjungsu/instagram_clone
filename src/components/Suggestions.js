import React from 'react';
import '../styles/suggestions.scss';
import Profile from './Profile';
const Suggestions = () => {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">회원님을 위한 추천</div>
                <a href="/">모두 보기</a>
            </div>
            <Profile  caption="회원님을 팔로우합니다." urlText="팔로우" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile  caption="회원님을 팔로우합니다." urlText="팔로우" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile  caption="회원님을 팔로우합니다." urlText="팔로우" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile  caption="회원님을 팔로우합니다." urlText="팔로우" iconSize="medium" captionSize="small" storyBorder={true}/>
            
        </div>
    );
};

export default Suggestions;