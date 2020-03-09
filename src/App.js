import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/index.css";
import Home from './components/presentational/Home';
import WatchOnline from './components/presentational/WatchOnline';
import NavBar from "./components/presentational/Navigation/NavBar";
import MiniBar from './components/presentational/Navigation/MiniBar';
import Footer from './components/presentational/Footer';

function App() {
  return (
    <Router>
      <div>
        <MiniBar />
        <NavBar />
      </div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/watch-online'>
          <WatchOnline />
        </Route>
      </Switch>
      <div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
