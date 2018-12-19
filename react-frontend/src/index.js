//index.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "./components/Header";

import AddDevice from "./components/AddDevice";
import ListDevice from "./components/ListDevice";
import UpdateDevice from "./components/UpdateDevice";

import "./index.css";

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Header />
      </div>
    </div>
    <div>
      <Router>
        <div>
          <Route path="/add" component={AddDevice} />
          <Route exact path="/" component={ListDevice} />
          <Route path="/update/:id" component={UpdateDevice} />
        </div>
      </Router>
    </div>
  </div>,
  document.getElementById("root")
);
