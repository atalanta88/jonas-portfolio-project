import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./javascript/components/pages/Home";
import Navbar from "./javascript/components/common/Navbar";
import Footer from "./javascript/components/common/Footer";

import "./App.css";

import ScrollToTop from "./javascript/components/common/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <Navbar />
        <ScrollToTop />
        <div id="container">
          <div id="main-content">
            <Switch>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
