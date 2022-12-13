import * as logo from "./../../Images/logo.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Notify from "../../Pages/Notification/notify";

const Header = () => {
  const activeClass = (params) => {
    return params.isActive ? "active-item" : "null";
  };
  return (
    <Sheader>
      <img
        src={logo.default}
        alt=""
        style={{ width: "120px", height: "70px" }}
      />
      <ul className="Navi">
        <li>
          <NavLink to="/" className={activeClass}>
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/class" className={activeClass}>
            Class
          </NavLink>
        </li>
        <li>
          <NavLink to="/timetable" className={activeClass}>
            Timetable
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={activeClass}>
            News
          </NavLink>
        </li>
      </ul>

      <ul className="icon">
        <li id="notify" className={activeClass}>
          <Notify />
        </li>
        <li>
          <NavLink to="/attend" className={activeClass}>
            <box-icon name="calendar-check" type="solid" size="md"></box-icon>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className={activeClass}>
            <box-icon name="user-circle" type="solid" size="md"></box-icon>
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            onClick={() => {
              localStorage.clear();
              window.location.replace("https://react-project-tawny.vercel.app/");
            }}
          >
            <box-icon name="log-out" size="md"></box-icon>
          </NavLink>
        </li>
      </ul>
    </Sheader>
  );
};

export default Header;

const Sheader = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  img {
    margin-left: -5%;
  }
  .Navi {
    margin-left: 5%;
    margin-top: 0.5%;
  }
  .icon {
    margin-right: -5%;
    margin-bottom: -0.5%;
    #notify {
      margin-top: -5px;
    }
  }
  display: flex;
  position: fixed;
  top: 0%;
  padding: 5px 0px;
  background-color: #6284ff;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
  ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    a {
      color: black;
      text-decoration: none;
      font-size: 25px;
    }
  }
  .active-item {
    transform: scale(1.5);
    color: white;
    font-size: 30px;
    box-icon {
      transform: scale(1.5);
    }
  }
  li:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }
`;
