import React, { useState } from "react";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";

import { dataExercise } from "../../Data/dataExercise";

const Exercise = () => {
  const options = ["A - Z", "Z - A", "Latest", "Oldest"];
  const defaultOption = options[0];

  const [deadline, setDeadline] = useState(false);
  const handleAppear = () => {
    setDeadline(!deadline);
  };

  return (
    <SExercise>
      <div className="head">
        <h5>Exercises</h5>
      </div>
      <div className="exercisebtn">
        <box-icon name="search" size="md"></box-icon>
        <input placeholder="Search..." />
        <Dropdown options={options} value={defaultOption} />
      </div>

      <div className="detail">
        {dataExercise.map((item, index) => {
          return (
            <div
              key={index}
              className="exrcisecontent"
              onMouseEnter={handleAppear}
              onMouseLeave={handleAppear}
            >
              <box-icon type="solid" name="file-pdf" size="lg"></box-icon>
              <a href={item.link}>{item.name}</a>
              <div className="span">
                {item.dl === "2 days early" ? (
                  <span style={{ color: "green" }}>{item.dl}</span>
                ) : (
                  <span>{item.dl}</span>
                )}
              </div>
              {item.dl === "2 days early" ? (
                <box-icon
                  size="md"
                  style={{ backgroundColor: "green", borderRadius: "50%" }}
                  name="check-circle"
                ></box-icon>
              ) : (
                <box-icon
                  size="md"
                  style={{ backgroundColor: "red", borderRadius: "50%" }}
                  name="x-circle"
                ></box-icon>
              )}
            </div>
          );
        })}

        {deadline ? (
          <table>
            <tr>
              <th>Status</th>
            </tr>
            <tr>
              <td>Start</td>
              <td>28/11/2022 00:00</td>
            </tr>
            <tr>
              <td>End</td>
              <td>30/11/2022 23:59</td>
            </tr>
          </table>
        ) : (
          <></>
        )}
      </div>
    </SExercise>
  );
};

export default Exercise;

const SExercise = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .head {
    margin-left: -2.2%;
    height: 70px;
    background-color: white;
    border: 2px solid gainsboro;
    /* text-align: center; */
    h5 {
      line-height: 70px;
      margin-left: 38%;
      font-weight: bolder;
    }
  }
  .exercisebtn {
    width: 70%;
    margin-left: 7%;
    display: flex;
    gap: 1rem;
    box-icon {
      position: absolute;
      margin-left: 20px;
      margin-top: 20px;
    }
    input {
      width: 80%;
      padding-left: 70px;
      height: 70px;
      font-size: 20px;
      border: 0;
      border-radius: 10px;
      border: 1px solid gainsboro;
    }
    input:hover {
      border: 1px solid black;
    }

    .Dropdown-root {
      width: 150px;

      .Dropdown-control:hover {
        border: 1px solid black;
      }
      .Dropdown-control {
        font-size: 20px;
        border-radius: 10px;
        border: 0;
        height: 70px;
        display: flex;
        align-items: center;
        border: 1px solid gainsboro;
        .Dropdown-arrow {
          margin-top: 12%;
        }
      }
      .Dropdown-option {
        font-size: 15px;
      }
    }
  }

  .detail {
    display: flex;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    .exrcisecontent {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      margin-left: 7%;
      width: 66.5%;
      display: flex;
      gap: 1rem;
      height: 80px;
      border-radius: 10px;
      background-color: white;
      align-items: center;
      border: 1px solid gainsboro;
      box-icon {
        margin-left: 20px;
      }
      a {
        font-size: 20px;
        color: #6284ff;
        text-decoration: none;
      }
      .span {
        font-size: 20px;
        margin-left: 60%;
        color: red;
      }
    }
    table {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      width: 250px;
      border: 1px solid gainsboro;
      border-collapse: collapse;
      text-align: center;
      font-size: 20px;
      background-color: white;
      margin-left: 75%;
      margin-top: -16%;
      tr {
        border-radius: 10px;
        font-size: 15px;
      }
      th {
        border: 1px solid gainsboro;
        border-collapse: collapse;
        padding: 5px 10px;
      }
      td {
        border: 1px solid gainsboro;
        border-collapse: collapse;
        padding: 5px 10px;
      }
    }
  }
`;
