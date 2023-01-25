'use client';
import { auth } from '@firebase/config';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import navStyle from './ParentNav/ParentNav.module.css';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    Cookies.remove('uid');
    router.push('/');
  };

  return (
    <button className={navStyle.logout} onClick={() => handleLogout()}>
      Logout
    </button>
  );
};

export default Logout;
