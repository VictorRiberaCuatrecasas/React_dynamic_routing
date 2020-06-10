import React from 'react';
import Achievements from "./views/Achievements";
import Shop from "./views/Shop";
import Nav from "./components/Nav";
import Home from "./views/Home"
import Notfound from "./views/404"
import ShopItem from "./views/ShopItem"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./scss/App.scss";

require("dotenv").config();

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/achievements" component={Achievements}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop/:id" component={ShopItem}></Route>
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
