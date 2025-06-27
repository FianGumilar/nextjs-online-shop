import { signIn, signOut, useSession } from "next-auth/react";
import styles from './Navbar.module.scss';

const Navbar = () => {
    const { data } = useSession();
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__button}>
                <button onClick={() => (data ? signOut() : signIn())}>
                    {data ? 'Logout' : 'Login'}
                </button>
            </div>
        </div>
    )
}

export default Navbar;