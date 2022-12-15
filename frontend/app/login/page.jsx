'use client';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/config";
import loginStyles from "./Login.module.css";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const router = useRouter();

    const signIn = async () => {
        try {
            const { user: { uid } } = await signInWithPopup(auth, provider);
            Cookies.set('uid', uid);
            router.push('/dashboard');
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <div className={loginStyles.container}>
            <button onClick={() => signIn()}>
                 { `G -> Sign in with Google` }
            </button>
        </div>
    )
}

export default Login;