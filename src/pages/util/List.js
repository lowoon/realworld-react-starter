import React from 'react';
import { Link } from 'react-router-dom';

function List({ linkName, iconName, url, value }) {
  return (
    <li className="nav-item">
      <Link className={linkName} to={url}>
        {iconName ?
          <i className={iconName}>&nbsp;{value}</i>
          :
          <>
            {value}
          </>
        }
      </Link>
    </li>
  );
}

export default List;