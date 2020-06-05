import React from "react";
import { Link } from 'react-router-dom';
import List from '../pages/util/List';

const Header = ({ jwt, onClick }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <List value="Home"
                iconName={null}
                linkName="nav-link active"
                url="/"/>
          <List value="New Post"
                iconName="ion-compose"
                linkName="nav-link"
                url="/editor"/>
          <List value="Settings"
                iconName="ion-gear-a"
                linkName="nav-link"
                url="/settings"/>
          {jwt ?
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={onClick}>Log Out</Link>
            </li>
            :
            <>
              <List value="Sign Up"
                    iconName={null}
                    linkName="nav-link"
                    url="/register"/>
              <List value="Sign In"
                    iconName={null}
                    linkName="nav-link"
                    url="/login"/>
            </>
          }
        </ul>
      </div>
    </nav>
  )
};

export default Header;
