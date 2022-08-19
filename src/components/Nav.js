import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        className="nav_logo"
        onClick={() => navigate("/")}
      />
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav_input"
        type={"text"}
        placeholder="영화를 검색해 주세요."
      />
      <img
        alt="User Profile Logo"
        src="https://pbs.twimg.com/profile_images/1026501220050108418/9JxARg16_400x400.jpg"
        className="nav_avatar"
      />
    </nav>
  );
};

export default Nav;
