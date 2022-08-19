import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route path="/profile" element={<Profile />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
