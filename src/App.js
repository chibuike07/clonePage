import React from "react";
import "./App.css";
import Parent from "./Parent/Parent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Parent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
