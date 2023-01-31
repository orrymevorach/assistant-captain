'use client';
import { useEffect, useState } from 'react';
import { auth } from '@firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';
import { getUser, createUser } from '@airtable/utils';
import Nav from '@components/Nav/ParentNav/ParentNav';
import teamsStyle from './Teams.module.css';
import { UserContext } from '@user-context';
import { useRouter } from 'next/navigation';
import Loader from '@components/Loader/Loader';

export default function TeamLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const value = { user, setUser };

  useEffect(() => {
    const handleLoginOnPageLoad = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        Cookies.remove('uid');
        router.push('/');
      }

      if (firebaseUser) {
        const { uid, email } = firebaseUser;
        const doesUserExist = await getUser(uid);
        const hasAirtableRecord = doesUserExist.users.length !== 0;
        let user = doesUserExist.users;

        if (!hasAirtableRecord) {
          const createdUser = await createUser(uid, email);
          user = createdUser.users;
        }
        setUser(user);
      }
    });

    return () => handleLoginOnPageLoad();
  }, []);

  if (!user.length) return <Loader />;

  return (
    <UserContext.Provider value={value}>
      <div className={teamsStyle.grid}>
        <Nav />
        {children}
      </div>
    </UserContext.Provider>
  );
}
