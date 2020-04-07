import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import WincLogoSrc from './assets/img/winc-logo.png';
import Review from "./pages/Review";
import Search from "./pages/Search";

export default function App() {
  return (
    <Router>
      <header className="app-header">
        <h1>Feedback Factory</h1>
        <img src={WincLogoSrc} alt="Winc Academy"/>
      </header>
      <main className="app-main">
        <Switch>
          <Route path="/project/:id" component={Review}/>
          <Route path="/" exact={true} component={Search}/>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}
