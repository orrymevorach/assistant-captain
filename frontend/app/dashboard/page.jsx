"use client";
import Logout from '../../components/Logout';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
    const [ user, setUser ] = useState(null);
    const auth = getAuth();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    displayName: user.displayName,
                    email: user.email,
                    uid: user.uid,
                }
                setUser(userData)
            }
        })
    }, [])
    
    return (
        <div className='parent'>
            {
                user && 
                <div>
                    <h1>{ `Welcome to the dashboard ${user.displayName}` }</h1>
                    <p>{ `Email: ${user.email}` }</p>
                    <p>{ `UID: ${user.uid}` }</p>
                    <Logout />
                </div>
            }
        </div>
    )
}

export default Dashboard;