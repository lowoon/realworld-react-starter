import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route } from 'react-router-dom';
import Auth from './pages/Auth';
import axios from 'axios'
import Settings from './pages/Settings';

const App = () => {

  // 참고: https://github.com/gothinkster/realworld/tree/master/api
  (async () => {
    const response = await axios.get("https://conduit.productionready.io/api/articles", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    });
    const content = await response.data;
    console.log(content);
  })();

  return (
    <>
      <Header/>
      <Route path={"/"} exact component={Home}/>
      <Route path={"/register"} exact component={Auth}/>
      <Route path={"/settings"} exact component={Settings}/>
      <Footer/>
    </>
  );
};

export default App;
