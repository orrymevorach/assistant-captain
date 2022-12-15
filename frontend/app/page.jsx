'use client';
import { useRouter } from 'next/navigation';
import { initFirebaseAuth } from '../firebase/config';
import Cookies from 'js-cookie';
import styles from '../styles/Home.module.css';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

const App = () => {
  initFirebaseAuth();
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  onAuthStateChanged(auth, user => {
    if (user) {
      Cookies.set('uid', user.uid);
      router.push('/dashboard');
    }
  });

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {})
      .catch(error => console.log('error', error));
  };

  return (
    <div className={styles.container}>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default App;
