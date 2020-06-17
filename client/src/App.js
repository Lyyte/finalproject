import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <div>
        <Test />
      </div>
    </Router>
  )
}