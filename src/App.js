import React from "react";
import "./App.css";
import Parent from "./Parent/Parent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Parent} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
