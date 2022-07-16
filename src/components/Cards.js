import React from 'react';
import '../styles/cards.scss';
import Stories from './Stories';
import Card from './Card';
const Cards = () => {

    const commentsOne = [
        {
            user : "mjcah2013",
            text : "ㅎㅇㅎㅇㅎㅇ",
            id : 1,
        },
        {
            user : "cooljung",
            text : "안녕하세요",
            id : 2,
        },
        {
            user : "bori",
            text : "ㅋㅋㅋㅋㅋ",
            id : 3,
        },
    ];
    const commentsTwo = [
        {
            user : "가렌",
            text : "데마시아~~",
            id : 1,
        },
        {
            user : "럭스",
            text : "데마씌아~~",
            id : 2,
        },
        {
            user : "자르반",
            text : "버거킹~~",
            id : 3,
        },
    ];
    const commentsㅅThree = [
        {
            user : "스웨인",
            text : "녹서스~~~~",
            id : 1,
        },
        {
            user : "야스오",
            text : "죽음은 바람과 같지 늘 내...",
            id : 2,
        },
        {
            user : "제드",
            text : "보이지 않는 검이 가장 무서운...",
            id : 3,
        },
    ];
    return (
        <div className="cards">
            <Stories />

            <Card accountName="mjcah2013" storyBorder={true} image="https://picsum.photos/800/900" comments={commentsOne} likedByText="dadaddada" likedByNumber={89} hours={16} />
        </div>
    );
};

export default Cards;