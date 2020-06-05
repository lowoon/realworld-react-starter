import React, { useReducer, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import api from '../../api/api.js'
import Input from '../util/Input';
import Error from '../util/Error';
import Button from '../util/Button';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Register = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    email: '',
    password: ''
  });
  const { username, email, password } = state;

  const onChange = event => {
    dispatch(event.target)
  }

  const error = { messages: [] };
  const [emailError, setEmailError] = useState(error);
  const [userNameError, setUserNameError] = useState(error);
  const [passwordError, setPasswordError] = useState(error);

  const onClickRegister = async e => {
    e.preventDefault();
    const createRequest = {
      username,
      email,
      password
    };
    api.user.create(createRequest)
    .then(res => history.push("/login"))
    .catch(e => {
      if (e.response.data.errors.username.length) {
        setUserNameError({
          messages: e.response.data.errors.username
        })
      }
      if (e.response.data.errors.email.length) {
        setEmailError({
          messages: e.response.data.errors.email
        })
      }
      if (e.response.data.errors.password.length) {
        setPasswordError({
          messages: e.response.data.errors.password
        })
      }
    });
  }

  return (
    <div className="register-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>
            <ul className="error-messages">
              <Error messages={userNameError.messages} name={"username"}/>
              <Error messages={emailError.messages} name={"email"}/>
              <Error messages={passwordError.messages} name={"password"}/>
            </ul>
            <form>
              <Input name="username"
                     placeHolder="Your Name"
                     value={username}
                     onChange={onChange}/>
              <Input name="email"
                     placeHolder="Email"
                     value={email}
                     onChange={onChange}/>
              <Input name="password"
                     placeHolder="Password"
                     value={password}
                     onChange={onChange}/>
              <Button onClick={onClickRegister}
                      value="Sign up"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
