import React from 'react';
import '../styles/story.scss';
import ProfileIcon from './ProfileIcon';
import users from '../data/users';
const Story = () => {
    //유저데이터 안에서 랜덤으로 이름 가져오기
    let accountName = users[Math.floor(Math.random() * users.length)].username;

    //이름이 5자 보다 길다면 뒤에 생략
    if(accountName.length > 5){
        accountName = accountName.substring(0, 5) + "...";
    }
    return (
        <div className="story">
            <ProfileIcon iconSize="big" storyBorder={true} />
            <span className="accountName">{accountName}</span>
        </div>
    );
};

export default Story;