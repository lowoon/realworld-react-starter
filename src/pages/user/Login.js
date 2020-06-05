import React, { useReducer, useState } from "react";
import { useHistory } from 'react-router-dom';
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

const Login = ({ onClick }) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    password: ''
  })
  const { email, password } = state;

  const onChange = event => {
    dispatch(event.target)
  }

  const error = { messages: [] };
  const [emailError, setEmailError] = useState(error);
  const [passwordError, setPasswordError] = useState(error);

  const onClickLogIn = async event => {
    event.preventDefault();
    const loginRequest = {
      email,
      password
    }
    api.user.login(loginRequest)
    .then(res => {
      localStorage.setItem("jwt", `Token ${res.data.user.token}`);
      onClick();
      history.push("/")
    })
    .catch(e => {
      if (e.response.errors.email.length) {
        setEmailError({
          messages: e.response.errors.email
        })
      }
      if (e.response.errors.password.length) {
        setPasswordError({
          messages: e.response.errors.password
        })
      }
    });
  }

  return (
    <div className="login-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <ul className="error-messages">
              <Error messages={emailError.messages} name={"email"}/>
              <Error messages={passwordError.messages} name={"password"}/>
            </ul>
            <form>
              <Input name="email"
                     placeHolder="Email"
                     value={email}
                     onChange={onChange}/>
              <Input name="password"
                     placeHolder="Password"
                     value={password}
                     onChange={onChange}/>
              <Button onClick={onClickLogIn}
                      value="Sign in"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
