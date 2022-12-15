'use client';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { auth, initFirebaseAuth } from '../firebase/config';
import { onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import Cookies from "js-cookie";
import Login from './login/page';
import styles from './App.module.css';

const App = () => {
    initFirebaseAuth();

    return (
        <div className={styles.container}>
            <Login />
        </div>
    )
}

export default App;