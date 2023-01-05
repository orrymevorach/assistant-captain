'use client';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebase/config';
import Cookies from 'js-cookie';
import { getUser, createUser } from '../../airtable/utils';

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            const cookieUid = Cookies.get('uid');

            if (!firebaseUser || cookieUid !== firebaseUser.uid) {
                Cookies.remove('uid');
                router.push('/');
            }

            if (firebaseUser) {
                const { uid, email } = firebaseUser;
                const doesUserExist = await getUser(uid);
                const hasAirtableRecord = doesUserExist.users.length !== 0;

                if (!hasAirtableRecord) {
                    await createUser(email);
                }
            }
        });

        return () => unsubscribe();
    }, []);

    return <div className='container'>DASHBOARD</div>;
};

export default Dashboard;
