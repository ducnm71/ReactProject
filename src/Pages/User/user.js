import React, { useRef, useState } from "react";
import styled from "styled-components";

const User = () => {
  const fileSeclect = useRef();
  const [style, setStyle] = useState(0);

  return (
    <SUser>
      <form>
        <div className="img">
          <h3> Your Current Avatar</h3>
          <img
            src="https://avatars.preply.com/i/logos/i/logos/avatar_wslh02bek4c.jpg"
            alt=""
          />
          <div className="item">
            <input type="file" ref={fileSeclect} hidden />
            <input
              type="button"
              value="Change"
              name="img"
              onClick={() => fileSeclect.current.click()}
            />
          </div>
          <ul>
            <li>
              <a
                href="#information"
                className={style === 0 ? "styleActive" : ""}
                onClick={() => setStyle(0)}
              >
                <h4>Information</h4>
              </a>
            </li>
            <li>
              <a
                href="#password"
                className={style === 1 ? "styleActive" : ""}
                onClick={() => setStyle(1)}
              >
                <h4>Password</h4>
              </a>
            </li>
          </ul>
        </div>
        <div className="inforUser">
          <h3>Personal Details</h3>
          <div className="input">
            {style === 0 ? (
              <div className="input1">
                <div className="item">
                  <label for="name">Full Name</label>
                  <input
                    name="name"
                    value="Nguyen Minh Duc"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="item">
                  <label for="dob">Date Of Birth</label>
                  <input
                    name="dob"
                    value="07/01/2003"
                    // type="date"
                    placeholder="Enter your birthday"
                  />
                </div>

                <div className="item">
                  <label for="address">Address</label>
                  <input
                    name="address"
                    value="Ha Noi"
                    type="text"
                    placeholder="Enter your address"
                  />
                </div>

                <div className="item">
                  <label for="phone">Phone Number</label>
                  <input
                    name="phone"
                    value="0762023368"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="item">
                  <label for="email">Email</label>
                  <input
                    name="email"
                    value="ducn7128@gmail.com"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            ) : (
              <div className="input2">
                <div className="item">
                  <label for="password">Old Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your old password"
                  />
                </div>
                <div className="item">
                  <label for="password">New Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your new password"
                  />
                </div>

                <div className="item">
                  <label for="password">Confirm Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Confirm your new password"
                  />
                </div>
              </div>
            )}
            <button>Save</button>
          </div>
        </div>
      </form>
    </SUser>
  );
};

export default User;

const SUser = styled.div`
  form {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 20%;
    label {
      font-size: 20px;
    }
    input {
      padding-left: 20px;
      width: 350px;
      font-size: 20px;
      height: 50px;
      border-radius: 10px;
      border: 0;
    }
    .img {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      padding: 20px 20px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      border-radius: 20px 0 0 20px;
      border: 1px solid gainsboro;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      input {
        padding: 0;
        width: 100px;
        background-color: #6284ff;
        font-weight: bold;
        color: white;
      }
      input:hover {
        background-color: #0000aa;
      }
      .styleActive {
        color: #6284ff;
      }
      ul {
        margin-top: 40px;
        margin-left: -30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
          list-style: none;
          a {
            color: black;
            text-decoration: none;
            h4 {
              font-size: 20px;
            }
          }
        }
      }
    }
    .inforUser {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      width: 800px;
      padding: 20px 20px;
      height: 400px;
      border-radius: 0 20px 20px 0;
      border: 1px solid gainsboro;
    }
    .input {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      .input1 {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .input2 {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .item {
        display: flex;
        flex-direction: column;
      }
      button {
        position: absolute;
        margin: 245px 0 0 600px;
        border: 0;
        border-radius: 10px;
        background-color: #6284ff;
        width: 120px;
        font-size: 20px;
        height: 50px;
        font-weight: bold;
        color: white;
      }
      button:hover {
        background-color: #0000aa;
      }
    }
  }
`;
