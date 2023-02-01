import { useEffect } from 'react';
import { auth } from '@firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';
import { getUser, createUser } from '@airtable/utils';
import { useRouter } from 'next/navigation';

const useAuth = ({ setUser }) => {
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
          const doesUserExist = await getUser(uid);
          const hasAirtableRecord = doesUserExist.users.length !== 0;
          let userData = doesUserExist.users;

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
};

export default useAuth;
