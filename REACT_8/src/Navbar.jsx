import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import logo from "./logo.svg";
import Slidebar from "./Slidebar";
import Social from "./Social";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const showMenu = () => {
    if (window.innerWidth > 800) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  };
  useEffect(()=>{
    showMenu();
    window.addEventListener("resize", showMenu);

  },[])


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className="link-container show-container">
         {showLinks&&<Slidebar />}
        </div>
        <Social />
      </div>
    </nav>
  );
};

export default Navbar;
