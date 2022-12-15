'use client';
import { useEffect, useState } from 'react';
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
  const [user, setUser] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      router.push('/dashboard');
    } else {
      console.log('user is siged out');
    }
  });

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        Cookies.set('uid', user.uid);
        setUser(user);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <div className={styles.container}>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default App;
