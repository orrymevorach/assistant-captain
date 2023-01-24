import { initFirebaseAuth } from '../firebase/config';
import Login from './login/page';
import styles from './App.module.css';

const App = () => {
  initFirebaseAuth();

  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
};

export default App;
