"use client";
import Logout from '../../components/LogoutButton';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebase/config';
import Cookies from 'js-cookie';

const Dashboard = () => {
    const router = useRouter();
   const [ userData, setUserData ] = useState();

   useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                const uidVerify = Cookies.get('uid');
                if (uidVerify !== user.uid) {
                    Cookies.set('uid', 'false');
                    router.push('/')
                } else {
                    setUserData(user);
                }
            } 
        })
   }, [])
    

    return (
        <div className='parent'>
            {
                userData && 
                <div>
                    <h1>{ `Welcome to the dashboard` }</h1>
                    <p>{ `Email: ${userData.email}` }</p>
                    <p>{ `UID: ${userData.uid}` }</p>
                    <Logout />
                </div>
            }
        </div>
    )
}

export default Dashboard;