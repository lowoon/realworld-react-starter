import React from "react";
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <Link className="navbar-brand" to="/">conduit</Link>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            <i className="ion-compose"/>&nbsp;New Post
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">
            <i className="ion-gear-a"/>&nbsp;Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign up</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
