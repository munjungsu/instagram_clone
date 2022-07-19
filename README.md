# 인스타그램 클론코딩

### 프로젝트 구조
```
public
│ 
src ── Components
│   ├── Card.js
│   ├── CardMenu.js
│   ├── Cards.js
│   ├── Comment.js
│   ├── Footer.js
│   ├── Menu.js
│   ├── Navigation.js
│   ├── Profile.js
│   ├── ProfileIcon.js
│   ├── Sidebar.js
│   ├── Stories.js
│   ├── Story.js
│   └── Suggestions.js
├── data ── users.js
├── images ── icon.png ...
├── pages
│   ├── Login.js
│   └── Main.js
├── styles ── _properties.scss, card.scss, story.scss ... 
├── App.js
└── index.js
```
### 로그인 기능
##### useRef()속성으로 input 값의 접근, 임시 로그인 계정정보와 input값의 value가 일치한다면 localStorage에 id,pw 등록한 뒤 useNavigate()속성으로 Feed페이지로 이동하게 하였습니다.
-----------
```
//임시 로그인 계정정보
const userInfo = {
    id : 'mjcah2013',
    pw : '1234@'
}
```

```
const login () =>{


const [userid, setUserid] = React.useState('');
const [userpw, setUserpw] = React.useState(''); 

const useridRef = React.useRef();
const userpwRef = React.useRef();

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
}
```
### 로그아웃 기능
##### 로그아웃 버튼 클릭시 localStorage에 등록했던 id,pw를 지우고 로그인 페이지로 이동하게 하였습니다.
---------
```
 const onDelete = ()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('pw');
        navigate('/login');
    }
```

### 댓글 기능
##### props로 받아온 commemts를 addCom에 복제 > 전송될 댓글 데이터 newAddCom을 복제된 addCom에 push > setAddcom에 넣어줌으로써 상태값 갱신(화면갱신)

```
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
```
