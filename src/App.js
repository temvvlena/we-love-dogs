import React from "react";
import Home from "./components/Home";
import EachBreed from "./components/EachBreed";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  /*
      Since we want to open seperate page to see dog pictures. I used Router to pass parameters.
      Initally, it will render at Home.js
  */
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/pictures/:id" component={EachBreed} />
    </React.Fragment>
  );
}

export default App;
