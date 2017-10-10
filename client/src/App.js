import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from "./pages/Customers";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Customers} />
        <Route exact path="/customer" component={Customers} />
        <Route exact path="/customer/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
