'use client';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebase/config';
import Cookies from 'js-cookie';
import { client, FIND_USER, CREATE_USER } from '../../gql';

const Dashboard = () => {
    const router = useRouter();
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            const cookieUid = Cookies.get('uid');
            // If the user doesn't exist or the users uid stored doesn't match
            // firebases uid then remove the cookie and redirect the user to login page
            if(!user || cookieUid !== user.uid) {
                Cookies.remove('uid');
                router.push('/');
            }

            if (user) {
                const { uid } = user;
                // Check if user exists in database
                client.query({
                    query: FIND_USER,
                    variables: { uid },
                }).then( res => {
                    // If user doesn't exist then create new user
                    if (res.data.users.length === 0) {
                        const { email } = user
                        client.mutate({
                            mutation: CREATE_USER,
                            variables: { email, uid },
                            // Update apollo cache with new user created
                            refetchQueries: [
                                {
                                    query: FIND_USER,
                                    variables: { uid },
                                }
                            ]
                        }).then( res => console.log(res));
                    }
                });
            }
        });
    
        return () => unsubscribe();
    }, []);

    return (
        <div className='container'>
            DASHBOARD
        </div>
    )
}

export default Dashboard;