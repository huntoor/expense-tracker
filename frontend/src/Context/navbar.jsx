import { Link } from "react-router-dom";

import "./navbar.css";
import logo from '../images/expenseTrackingLogo.png';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="links">
        <div>
          <Link to="/"><img src={logo} className="app-logo" alt="Logo" /></Link>
        </div>
      </div>
      {
        props.isLoggedin ?
        <div className="username">
          <h1>Welcome, {props.username}</h1>
        </div>
        :
        <div className="login">
          <Link to="/signin">Log in</Link>
        </div>
      }
    </div>
  );
}

export default Navbar;