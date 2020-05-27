// Absolute Imports
import React from "react";
import { render } from "react-dom";

import "./stylesheets/style.scss";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
