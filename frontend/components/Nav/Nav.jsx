'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoutButton from '../LogoutButton';
import navStyle from './Nav.module.css';

const Nav = () => {
    const router = usePathname();
    const navRoutes = [
        { name: 'Dashboard', route: '/dashboard' },
        { name: 'Teams', route: '/dashboard/teams' },
        { name: 'Create A Team', route: '/dashboard/create-a-team' },
    ];

    return (
        <nav className={navStyle.container}>
            <ul>
                {navRoutes.map(({ name, route }, idx) => {
                    return (
                        <li
                            className={route === router ? navStyle.highlighted : undefined}
                            key={`${name}${idx}`}
                        >
                            <Link href={route}>{name}</Link>
                        </li>
                    );
                })}
                <li>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
