// import Login from './Components/Login/login';
import Apply from "./Pages/News/apply";
import React, { useState} from "react";

import Header from "./Components/Header/header";
import Overview from "./Pages/Overview/overview";
import Class from "./Pages/Class/class";
import Timetable from "./Pages/Timetable/timetable";
import News from "./Pages/News/news";

import Attend from "./Pages/Attendance/attend";
import User from "./Pages/User/user";

import { Routes, Route} from "react-router-dom";
import "./App.css";
import Detail from "./Pages/Detail/detail";
import Login from "./Pages/Login/login";



function App() {
  const [login] = useState({
    mail: localStorage.getItem("email"),
    name: localStorage.getItem("name"),
  });


  return (
    <div className="App">
      {login.mail === null && login.name === null?
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
        :
        <>
        <Header/>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/class" element={<Class />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/news" element={<News />} />
            <Route path="/attend" element={<Attend />} />
            <Route path="/user" element={<User />} />
            <Route path="/class/detail/:id" element={<Detail/>}/>
            <Route path="/news/apply" element={<Apply />} />
          </Routes>
        </>
      }
          
    </div>
  );
}

export default App;


