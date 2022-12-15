'use client';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [uid, setUid] = useState('');
  const router = useRouter();
  useEffect(() => {
    const uidCookie = Cookies.get('uid');
    setUid(uidCookie);
  }, []);
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push('/');
      })
      .catch(error => {
        // An error happened.
        console.log('error', error);
      });
  };
  return (
    <div>
      <p>{uid}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
