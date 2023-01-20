'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { TeamsContext } from '../../app/teams/layout';
import LogoutButton from '../LogoutButton';
import navStyle from './Nav.module.css';

const Nav = () => {
    const router = usePathname();
    const { teamList } = useContext(TeamsContext);
    const navRoutes = [
        { name: 'Teams', route: '/teams' },
        { name: 'Create A Team', route: '/teams/create-a-team' },
    ];

    return (
        <nav className={navStyle.container}>
            <ul className={navStyle.mainUl}>
                {navRoutes.map(({ name, route }, idx) => {
                    return (
                        <li className={navStyle.mainLi} key={`${name}${idx}`}>
                            <Link
                                href={route}
                                className={`${navStyle.mainLink} ${
                                    route === router ? navStyle.highlighted : undefined
                                }`}
                            >
                                {name}
                            </Link>
                            {teamList.length !== 0 && name === 'Teams' && (
                                <ul className={navStyle.subUl}>
                                    {teamList.map((team, idx) => {
                                        return (
                                            <li key={`${team}${idx}`}>
                                                <Link href={`/teams/${team.id}`}>{team.name}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
                <li className={navStyle.mainLi}>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
