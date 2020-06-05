import React, { useEffect, useReducer } from "react";
import { useHistory } from 'react-router-dom';
import Input from '../util/Input';
import Button from '../util/Button';
import api from '../../api/api';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value || action.innerHTML
  }
}

const Settings = () => {
  const history = useHistory();
  useEffect(() => {
    const getMyInfo = async () => {
      const result = await api.user.get();
      const content = result.data.user;
      Object.keys(content).forEach(key => {
        dispatch({ name: key, value: content[key] })
      })
    };
    getMyInfo()
  }, [])

  const [state, dispatch] = useReducer(reducer, {});

  const { image, username, bio, email, password } = state;
  const onChange = event => {
    dispatch(event.target)
  }

  const onClickUpdate = e => {
    e.preventDefault();
    const updateRequest = {
      email,
      username,
      bio,
      image,
      password
    }

    api.user.update(updateRequest)
    .then(res => history.push("/"))
    .catch(e => {

    })
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <form>
              <fieldset>
                <Input placeHolder="URL of profile picture"
                       name="image"
                       value={image}
                       onChange={onChange}/>
                <Input placeHolder="Your Name"
                       name="username"
                       value={username}
                       onChange={onChange}/>
                <fieldset className="form-group">
                  <textarea className="form-control form-control-lg" rows="8"
                            placeholder="Short bio about you" name="bio" onChange={onChange}>
                    {bio}
                  </textarea>
                </fieldset>
                <Input placeHolder="Email"
                       name="email"
                       value={email}
                       onChange={onChange}/>
                <Input placeHolder="Password"
                       name="password"
                       value={password}
                       onChange={onChange}/>
                <Button onClick={onClickUpdate}
                        value="Update Settings"/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
