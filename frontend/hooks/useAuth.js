'use client';
import { useEffect } from 'react';
import { auth } from '@firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';
import { getUser, createUser } from '@airtable/utils';
import { useRouter } from 'next/navigation';

export default function useAuth({ setUser }) {
  const router = useRouter();
  useEffect(() => {
    const handleLoginOnPageLoad = onAuthStateChanged(
      auth,
      async firebaseUser => {
        if (!firebaseUser) {
          Cookies.remove('uid');
          router.push('/');
        }

        if (firebaseUser) {
          const { uid, email } = firebaseUser;
          const user = await getUser(uid);
          const hasAirtableRecord = user.users.length !== 0;
          let userData = user.users;

          if (!hasAirtableRecord) {
            const createdUser = await createUser(uid, email);
            userData = createdUser.users;
          }
          setUser(userData);
        }
      }
    );

    return () => handleLoginOnPageLoad();
  }, []);
}
