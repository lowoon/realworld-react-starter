import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route } from 'react-router-dom';
import Register from './pages/user/Register';
import Settings from './pages/user/Settings';
import Editor from './pages/Editor';
import Login from './pages/user/Login';

const App = () => {
  // api 참고: https://github.com/gothinkster/realworld/tree/master/api
  const [jwt, setJwt] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    const getToken = () => {
      setJwt(localStorage.getItem("jwt"));
    }
    getToken();
  }, [jwt])

  const onClickLogOut = () => {
    localStorage.removeItem("jwt");
    setJwt(localStorage.getItem("jwt"));
  }

  const onClickLogIn = () => {
    setJwt(localStorage.getItem("jwt"));
  }

  return (
    <>
      <Header jwt={jwt}
              onClick={onClickLogOut}/>
      <Route path={"/"} exact component={Home}/>
      <Route path={"/register"} exact component={Register}/>
      <Route path={"/settings"} exact component={Settings}/>
      <Route path={"/editor"} exact component={Editor}/>
      <Route path={"/login"}>
        <Login onClick={onClickLogIn}/>
      </Route>
      <Footer/>
    </>
  );
};

export default App;
