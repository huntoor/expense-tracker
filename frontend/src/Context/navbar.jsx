import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaretDown } from "phosphor-react";

import "./navbar.css";
import logo from '../images/expenseTrackingLogo.png';

const Navbar = (props) => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    // <div className="navbar">
    //   <div className="links">
    //     <div>
    //       <Link to="/"><img src={logo} className="app-logo" alt="Logo" /></Link>
    //     </div>
    //   </div>
    //   {
    //     props.isLoggedin ?
    //     <div className="username">
    //       <h1>Welcome, {props.username}</h1>
    //     </div>
    //     :
    //     <div className="login">
    //       <Link to="/signin">Log in</Link>
    //     </div>
    //   }
    // </div>

    <div className="navbar">
      <div className="links">
        <div>
          <Link to="/"><img src={logo} className="app-logo" alt="Logo" /></Link>
        </div>
      </div>
      {props.isLoggedin ? (
        <div className="user-dropdown">
          <div className="username" onClick={handleDropdownToggle}>
            <h1>Welcome, {props.username}</h1>
            <CaretDown size={25} />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </div>
      ) : (
        <div className="login">
          <Link to="/signin">Log in</Link>
        </div>
      )}
    </div>


  );
}

export default Navbar;