//import logo from "./logo.svg";
import React from "react";
import {HashRouter, Route} from 'react-router-dom';

import Home from './routes/Home'
import Detail from './routes/Detail'
import Nav from './components/Nav'


function App() {
  return(
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail" component={Detail} />
    </HashRouter>
  )
}
export default App;
