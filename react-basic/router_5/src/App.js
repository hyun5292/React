import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        <Route path={['/', '/home']} exact>
          <Home />
        </Route>
        
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
