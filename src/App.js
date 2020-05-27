import React from "react";
import Header from "./components/Header";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Header}></Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
