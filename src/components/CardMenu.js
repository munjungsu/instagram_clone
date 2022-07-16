import React from 'react';
import '../styles/cardmenu.scss';
import {ReactComponent as Polygon} from '../images/polygon.svg';
import {ReactComponent as Heart} from '../images/heart.svg';
import {ReactComponent as Comment} from '../images/comment.svg';
import {ReactComponent as Bookmark} from '../images/bookmark.svg';
const CardMenu = () => {
    return (
        <div className="cardMenu">
            <div className="interactions">
                <Heart className="icon" />
                <Comment className="icon" />
                <Polygon className="icon" />
            </div>
            <div>
                <Bookmark className="icon" />
            </div>
        </div>
    );
};

export default CardMenu;