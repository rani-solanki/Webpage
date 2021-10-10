import './App.css';
import React, { Fragment } from "react";
import Navbar from './Component/Navbar';
import Landing from './Component/landing';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import "@fontsource/montserrat";
import bootstrap from 'bootstrap';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar/>
        <Route exact path="/" component={Landing} />{" "}
      </Router>
    </Fragment>
  );
}

export default App;
