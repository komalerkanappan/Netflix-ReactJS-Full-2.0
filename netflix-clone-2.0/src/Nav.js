import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contants">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        {/* Avatar */}
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Netflix Logo"
        />
      </div>
    </div>
  );
}

export default Nav;
