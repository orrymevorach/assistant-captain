'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoutButton from '../LogoutButton';
import navStyle from './Nav.module.css';

const Nav = () => {
    const router = usePathname();
    const navRoutes = [
        { name: 'Teams', route: '/teams' },
        { name: 'Create A Team', route: '/teams/create-a-team' },
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
