import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './component/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}/>
          </Route>
          <Route path="/maker">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
