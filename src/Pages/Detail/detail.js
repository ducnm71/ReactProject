import React from "react";
import styled from "styled-components";
import Newfeed from "../../Components/Newfeed/newfeed";
import Member from "../../Components/Members/member";
import Exercise from "../../Components/Exercises/exercise";
import DocumentClass from "../../Components/DocumentClass/documentClass";
import axios from "axios";
import { useEffect, useState } from "react";
import { dataClases } from "../../Data/dataClasses";
import { useParams } from "react-router-dom";


const Detail = () => {
  const id = useParams().id -1
  console.log(id);
  const [style, setStyle] = useState(0);
  const [students, setStudents] = useState({});
  console.log(dataClases);

  
    
  useEffect(() => {
    axios.get(`http://localhost:8000/user`).then((res) => {
      const students = res.data;
      setStudents(students);
    });
  }, []);



  

  return (
    <SDetail>
      <div className="navi">
      
        <div className="in4Class">
            <h5>Name: {dataClases[id].name}</h5>
            <p>ID: {dataClases[id].id}</p>
            <p>Teacher</p>
            <img src={dataClases[id].teacherImg} alt="" />
            <p>{dataClases[id].teacherName}</p>
        </div>
        
        <ul>
          <li>
            <a
              href="#newfeed"
              className={style === 0 ? "styleActive" : ""}
              onClick={() => setStyle(0)}
            >
              <box-icon name="news"></box-icon>
              <h5>Newsfeed</h5>
            </a>
          </li>
          <li>
            <a
              href="#members"
              className={style === 1 ? "styleActive" : ""}
              onClick={() => setStyle(1)}
            >
              <box-icon name="user"></box-icon>
              <h5>Members</h5>
            </a>
          </li>
          <li>
            <a
              href="#exercises"
              className={style === 2 ? "styleActive" : ""}
              onClick={() => setStyle(2)}
            >
              <box-icon name="notepad"></box-icon>
              <h5>Exercises</h5>
            </a>
          </li>
          <li>
            <a
              href="#documentclass"
              className={style === 3 ? "styleActive" : ""}
              onClick={() => setStyle(3)}
            >
              <box-icon name="note"></box-icon>
              <h5>Document</h5>
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        {style === 0 ? (
          <Newfeed/>
        ) : style === 1 ? (
          <Member students={students} />
        ) : style === 2 ? (
          <Exercise />
        ) : (
          <DocumentClass />
        )}
      </div>
    </SDetail>
  );
};

export default Detail;

const SDetail = styled.div`
  width: 100%;
  margin-top: 81px;
  display: flex;
  .navi {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    padding: 50px 0 0 20px;
    gap: 2rem;
    border: 1px solid gainsboro;
    .in4Class {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h5 {
        font-size: 16px;
      }
      font-size: 15px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      font-size: 20px;
      a {
        text-decoration: none;
        display: flex;
        gap: 0.5rem;
        color: black;
      }
      .styleActive {
        color: #6284ff;
      }
    }
  }
  .content {
    margin-left: 17.3%;
    display: flex;
    flex-direction: column;
    width: 82.7%;
  }
`;
