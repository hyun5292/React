import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path={['/', '/home']} exact>
          <Home />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
