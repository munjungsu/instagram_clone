import React from 'react';
import '../styles/card.scss';
import Profile from './Profile';
import {ReactComponent as CardButton} from '../images/cardButton.svg';
import CardMenu from './CardMenu';
import Comment from './Comment';
const Card = (props) => {

    const {
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
    } = props;
    const [addCom, setAddcom] = React.useState(comments);
    const [nextId, setNextId] = React.useState(4);
    const inputQuery = React.useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const value = inputQuery.current.value;
        const newAddCom = {user: "bori", text : value, id : nextId}
        const newAddComs = [...addCom]
        newAddComs.push(newAddCom);
        
        setAddcom(newAddComs);
        setNextId(nextId+1);
        inputQuery.current.value = '';
    }
    console.log(addCom);
    return (
        <div className="card">
            <header>
                <Profile iconSize="medium" storyBorder={storyBorder} />
                <CardButton className="cardButton" />
            </header>
            <img className="cardImage" src={image} alt="card content" />
            <CardMenu />
            <div className="likedBy">
                <Profile iconSize="small" hideAccountName={true} />
                <span>
                    <strong>{likedByText}</strong> 님 외 {" "} <strong>{likedByNumber}명</strong>이 좋아합니다.
                </span>
            </div>
            <div className="comments">
                {addCom.map((addCom) =>{
                    return (
                        <Comment key={addCom.id} accountName={addCom.user} comment={addCom.text} />
                    );
                })}
            </div>
            <div className="timePosted">{hours} 시간 전</div>
            <form onSubmit={handleSubmit}>
            <div className="addComment">
                <div className="commentText">
                    <input type="text" placeholder="댓글 달기..." ref={inputQuery}/>
                </div>
                <button type="submit" className="postText">게시</button>
            </div>
            </form>
        </div>
    );
};

export default Card;