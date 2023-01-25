'use client';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/config';
import loginStyles from './Login.module.css';
import Google from '@components/Logo/Google';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const signIn = async () => {
    try {
      const {
        user: { uid },
      } = await signInWithPopup(auth, provider);
      Cookies.set('uid', uid);
      router.push('/teams');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.blurbContainer}>
        <div className={loginStyles.logoContainer}>
          <p className={loginStyles.logoName}>Assistant</p>
          <div className={loginStyles.underline}></div>
          <p className={loginStyles.logoName}>Captain</p>
        </div>
        <p className={loginStyles.blurb}>
          The app that let's you create teams and manage rosters. Send SMS to confirm upcoming game
          rosters. View team schedules and build rosters according to your needs.
        </p>
      </div>
      <div className={loginStyles.loginContainer}>
        <div className={loginStyles.login}>
          <p>{`Login :)`}</p>
          <button onClick={() => signIn()}>
            <Google />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
