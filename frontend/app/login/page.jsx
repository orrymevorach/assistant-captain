'use client';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "../../firebase/config";
import loginStyles from "../../styles/Login.module.css";

const Login = () => {
    const provider = new GoogleAuthProvider();

    const signIn = async () => {
        try {
            Cookies.set('isLoggedIn', 'true');
            await signInWithRedirect(auth, provider);
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <div className={loginStyles.parent}>
            <button onClick={() => signIn()}>
                 { `G -> Sign in with Google` }
            </button>
        </div>
    )
}

export default Login;