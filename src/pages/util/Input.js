import React from 'react';

function Input({ name, placeHolder, onChange, value }) {
  return (
    <fieldset className="form-group">
      <input className="form-control form-control-lg" type="text" placeholder={placeHolder}
             name={name} value={value} onChange={onChange}/>
    </fieldset>
  );
}

export default Input;