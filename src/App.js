//import logo from "./logo.svg";
import React from "react";
import {HashRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './routes/Home'
import Detail from './routes/Detail'
import Nav from './components/Nav'
import Mypage from "./routes/Mypage"; 


function App() {
  return(
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/myPage" component={Mypage} />
    </HashRouter>
  )
}
export default App;
