'use client';
import { auth } from '@firebase/config';
import { signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import navStyle from './ParentNav/ParentNav.module.css';

const Logout = () => {
  const handleLogout = async () => {
    await signOut(auth);
    Cookies.remove('uid');
  };

  return (
    <button className={navStyle.logout} onClick={() => handleLogout()}>
      Logout
    </button>
  );
};

export default Logout;
