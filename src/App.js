import React from "react";
import {Routes, Route} from 'react-router-dom';
import "./styles/main.scss";
import Main from './pages/Main';
import Login from './pages/Login';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
