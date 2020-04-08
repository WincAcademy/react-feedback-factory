import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import WincLogoSrc from './assets/img/winc-logo.png';
import Review from "./pages/Review";
import Project from "./pages/Project";
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
          <Route path="/project/:id/review" component={Review}/>
          <Route path="/project/:id" component={Project}/>
          <Route path="/" exact={true} component={Search}/>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}
