'use client';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { auth, initFirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Cookies from "js-cookie";
import Login from './login/page';
import styles from '../styles/Home.module.css';

const App = () => {
    initFirebaseAuth();
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (userData) => {
        if (userData) {
            Cookies.set('isLoggedIn', `${userData.emailVerified}`);
            router.push('/dashboard');
        } else {
            Cookies.set('isLoggedIn', 'false');
        }
    })
    }, []);

    return (
        <div className={styles.container}>
            <Login />
        </div>
    )
}

export default App;