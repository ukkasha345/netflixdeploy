import React, { useEffect, useState } from "react";
import logo from "../../material/Netflix-removed-back.png";
import { NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { BsFillBellFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "./navbar.css";

export default function NAVBAR() {
  const [barShown, setBarshown] = useState(false);
  const [textin, setTextin] = useState("");
  const [show, handleShow] = useState(false);

  function handleSearchChange(e) {
    // search bar text
    setTextin(e.target.value);
  }

  function handleSrchBtnClick() {
    setBarshown(!barShown);
    // alert("btn clicked and : "+ barShown )
  }

  useEffect(() => {
    window.addEventListener("scrollY", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    // <div  }></div>
    <nav className={`nav ${show && "nav-black"} `}>
      <NavLink className={"navlinks backadjst"} to={"/"}>
        <img src={logo} alt="netflix logo" className="navbar-logo backadjst" />
      </NavLink>

      <ul className="backadjst">
        <li className="backadjst">
          <NavLink className={"navlinks backadjst"} to={"/"}>
            HOME
          </NavLink>
        </li>
        <li className="backadjst">
          <NavLink className={"navlinks backadjst"} to={"/tvshows"}>
            TV SHOWS
          </NavLink>
        </li>
        <li className="backadjst">
          <NavLink className={"navlinks backadjst"} to={"/movies"}>
            MOVIES
          </NavLink>
        </li>
        <li className="backadjst">
          <NavLink className={"navlinks backadjst"} to={"/popular"}>
            POPULAR
          </NavLink>
        </li>
      </ul>
      {/* <p>{textin}</p> */}
      <div className="container-right backadjst">
        {barShown ? (
          <div>
            <input
              type={textin}
              className="serach-bar"
              placeholder="Seacrh here..."
              onChange={handleSearchChange}
            ></input>
          </div>
        ) : null}

        <button
          className="icons"
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            cursor: "pointer",
          }}
          onClick={handleSrchBtnClick}
        >
          <FaSistrix size={25} style={{ marginLeft: 0 }} className="icons" />
        </button>

        <BsFillBellFill size={25} className="icons" />
        <BsFillEmojiSmileFill size={25} className="icons" />
      </div>
    </nav>
  );
}
