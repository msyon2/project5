//import logo from "./logo.svg";
import React from "react";
import {HashRouter, Route} from 'react-router-dom';

import Home from './routes/Home'

function App() {
  return(
    <HashRouter>
      {/* <Navigation /> */}
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  )
}
export default App;
