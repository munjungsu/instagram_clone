import React from 'react';
import '../styles/profileIcon.scss';

const ProfileIcon = (props) => {

    const {iconSize, storyBorder, image} = props;

    const getRandomInt = (min, max)=>{
        //정수 값 취하기
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //1부터 70까지 랜덤 프로필 생성
    let randomId = getRandomInt(1, 70);

    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`;
    return (
        <div className={storyBorder ? "storyBorder" : "profileSub"}>
            <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile" />          
        </div>
    );
};

export default ProfileIcon;

