import React from 'react';
import '../styles/footer.scss';
const Footer = () => {
    return (
        <div className="footer">
            <ul className="links">
                <li>소개</li>
                <li>도움말</li>
                <li>홍보센터</li>
                <li>API</li>
                <li>채용정보</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>위치</li>
                <li>언어</li>
            </ul>
            <div className="copyright">@ 2022 INSTAGRAM FROM META</div>
        </div>
    );
};

export default Footer;