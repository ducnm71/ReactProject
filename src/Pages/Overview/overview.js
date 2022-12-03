import { useState } from "react";

import styled from "styled-components";
import Achievements from "../../Components/Achievements/achievements";
import Assignments from "../../Components/Assignments/assignments";
import Classroom from "../../Components/Classroom/classroom";
import Documents from "../../Components/Documents/documents";
import Records from "../../Components/Records/records";

const Overview = () => {
  const [style, setStyle] = useState(0);

  return (
    <Soverview>
      <ul>
        <li>
          <a
            href="#classroom"
            className={style === 0 ? "styleActive" : ""}
            onClick={() => setStyle(0)}
          >
            <box-icon type="solid" size="xs" name="cube"></box-icon> Classroom
          </a>
        </li>
        <li>
          <a
            href="#assignments"
            className={style === 1 ? "styleActive" : ""}
            onClick={() => setStyle(1)}
          >
            <box-icon size="xs" name="edit-alt"></box-icon> Assignment
          </a>
        </li>
        <li>
          <a
            href="#documents"
            className={style === 2 ? "styleActive" : ""}
            onClick={() => setStyle(2)}
          >
            <box-icon size="xs" type="solid" name="file-doc"></box-icon>{" "}
            Document
          </a>
        </li>
        <li>
          <a
            href="#records"
            className={style === 3 ? "styleActive" : ""}
            onClick={() => setStyle(3)}
          >
            <box-icon size="xs" name="video-recording"></box-icon> Record
          </a>
        </li>
        <li>
          <a
            href="#achievements"
            className={style === 4 ? "styleActive" : ""}
            onClick={() => setStyle(4)}
          >
            <box-icon size="xs" name="medal"></box-icon> Achievement
          </a>
        </li>
      </ul>
      <div className="Schild">
        <Classroom />
        <Assignments />
        <Documents />
        <Records />
        <Achievements />
      </div>
    </Soverview>
  );
};

export default Overview;

const Soverview = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: fixed;
  left: 0;
  top: 8.4%;
  height: 10000px;
  width: 300px;
  border: 1px solid gainsboro;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 40px;

    a {
      color: black;
      text-decoration: none;
      font-size: 18px;
      padding: 10px 10px;
    }
  }

  a:hover {
    border-radius: 10px;
    background-color: gainsboro;
    color: black;
    transition: 0.5s;
  }

  .styleActive {
    transition: 0.5s;
    border-radius: 10px;
    background-color: #6284ff;
    color: white;
    position: relative;
    left: 20%;
  }
  .Schild {
    width: 600%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 865px;
    margin-left: 150%;
    margin-top: -107%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;
