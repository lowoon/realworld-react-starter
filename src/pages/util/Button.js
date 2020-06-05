import React from 'react';

function Button({ onClick, value }) {
  return (
    <button className="btn btn-lg btn-primary pull-xs-right" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;