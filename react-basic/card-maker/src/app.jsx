import styles from './app.module.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <>
      <h1>Appppp</h1>
      <Login authService={ authService } />
    </>
  );
}

export default App;
