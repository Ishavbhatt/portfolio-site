import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
