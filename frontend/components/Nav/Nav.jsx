'use client';

import LogoutButton from '../LogoutButton';
import navStyle from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyle.container}>
            <ul>
                <li>
                    Dashboard
                </li>
                <li>
                    Teams
                </li>
                <li>
                    Create A Team
                </li>
                <li>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    )
}

export default Nav;