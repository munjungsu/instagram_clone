import React from 'react';
import '../styles/login.scss';
import { useNavigate } from 'react-router-dom';

import google from '../images/google.png';
import apple from '../images/app.png';
import logo from '../images/instagramLogo.png'
//임시 로그인 계정
const userInfo = {
    id : 'mjcah2013',
    pw : '1234@'
}

const Login = () => {
    
    const navigate = useNavigate();
    const useridRef = React.useRef();
    const userpwRef = React.useRef();
    
    

    const [userid, setUserid] = React.useState('');
    const [userpw, setUserpw] = React.useState(''); 
    

    const handleSubmit = ()=>{
        const idvalue = useridRef.current.value;
        const pwvalue = userpwRef.current.value;
        setUserid(idvalue);
        setUserpw(pwvalue);
        
        if(idvalue === userInfo.id && pwvalue === userInfo.pw){
            alert('로그인 성공')
            localStorage.setItem('id', idvalue);
            localStorage.setItem('pw', pwvalue);
            navigate('/feed');
        }
        else {
            alert('아이디와 비밀번호가 다릅니다.');
            idvalue.current.value = '';
            pwvalue.current.value = '';
        }
        
    }

    
    
    return (
        
        <div className="login_container">
            <h1>
                <img src={logo} />
            </h1>
            <form onSubmit={handleSubmit}>
                <section className="login_form">
                    <input type="text" name="id" id="id" ref={useridRef}  required   placeholder="전화번호, 사용자 이름 또는 이메일(mjcah2013)" className="form_control"/>
                    <input type="password" name="password" id="password" ref={userpwRef}placeholder="비밀번호 (1234@)"className="form_control" required />
              
                
                    <div>
                        <button type="submit" className="btn">로그인</button>
                    </div>
                    <div className="box">
                      <div className="line">또는</div>
                      <div className="find">
                        <a href="#">Facebook으로 로그인</a>
                        <a href="#">비밀번호 찾기</a>
                      </div>
                    </div>
                </section>
            </form>
            <div className="box2">
                <p>계정이 없으신가요?
                    <a href="#"><span>가입하기</span></a>
                </p>
            </div>
            <div>
                <p>앱을 다운로드 하세요</p>
                <div className="footer">
                    <a href="#">
                        <img src={google}></img>
                    </a>
                    <a href="#">
                        <img src={apple}></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;