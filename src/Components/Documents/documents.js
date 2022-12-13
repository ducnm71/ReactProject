import React from "react";
import styled from "styled-components";

import { lecture } from "../../Data/dataDocument";

const Documents = () => {
  return (
    <Sdocum id="documents">
      <h5>Unread Documents</h5>
      <div className="content">
        <table class="table table-bordered" style={{ marginTop: "1.6%" }}>
          <thead>
            <tr style={{ fontSize: "22px" }}>
              <th scope="col">#</th>
              <th scope="col">Document Name</th>
              <th scope="col">Class</th>
              <th scope="col">Date Posted</th>
            </tr>
          </thead>

          <tbody>
            {lecture.map((item, index) => {
              return item.name === "Lecture 1" ||
                item.name === "Lecture 2" ||
                item.name === "Lecture 3" ? (
                <></>
              ) : (
                <tr
                  style={{ fontSize: "22px", cursor: "pointer" }}
                  className="tr"
                  onClick={() => {
                    window.location.replace(
                      "https://react-project-tawny.vercel.app/class/detail/6#documentclass"
                    );
                  }}
                >
                  <th key={index} scope="row">
                    {index - 2}
                  </th>
                  <td>{item.name}</td>
                  <td>Full Stack</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
            <tr>
              <th style={{ fontSize: "22px" }} scope="row">
                3
              </th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th style={{ fontSize: "22px" }} scope="row">
                4
              </th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th style={{ fontSize: "22px" }} scope="row">
                5
              </th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th style={{ fontSize: "22px" }} scope="row">
                6
              </th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th style={{ fontSize: "22px" }} scope="row">
                7
              </th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th style={{ fontSize: "22px" }} scope="row">
                8
              </th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Sdocum>
  );
};

export default Documents;

const Sdocum = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  flex-direction: column;
  h5 {
    font-size: 30px;
  }
  .content {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 60%;
    height: 600px;
    background-color: white;
    border: 1px solid gainsboro;
    .tr:hover {
      background-color: gainsboro;
    }
  }
`;
