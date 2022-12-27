'use client';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LogoutButton from '../LogoutButton';
import navStyle from './Nav.module.css';

const Nav = () => {
    const router = usePathname();
    const [ isSelected, setIsSelected ] = useState('');
    
    useLayoutEffect(() => {
        setIsSelected(router);
    }, [router])
    return (
        <nav className={navStyle.container}>
            <ul>
                <li className={isSelected === '/dashboard' ? navStyle.highlighted : undefined}>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li className={isSelected === '/dashboard/teams' ? navStyle.highlighted : undefined}>
                    <Link href='/dashboard/teams'>Teams</Link>
                </li>
                <li className={isSelected === '/dashboard/create-a-team' ? navStyle.highlighted : undefined}>
                    <Link href='/dashboard/create-a-team'>Create A Team</Link>
                </li>
                <li>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    )
}

export default Nav;