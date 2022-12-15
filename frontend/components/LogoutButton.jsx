import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Logout = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await signOut(auth);
        Cookies.set('uid', 'false');
        router.push('/');
    }

    return (
        <>
            <button onClick={() => handleLogout()}>Logout</button>
        </>
    )
}

export default Logout;