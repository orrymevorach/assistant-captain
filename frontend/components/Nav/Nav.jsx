'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { TeamsContext } from '../../app/teams/layout';
import LogoutButton from '../LogoutButton';
import SubNav from '../SubNav/SubNav';
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
      <ul className={navStyle.list}>
        {navRoutes.map(({ name, route }, idx) => {
          return (
            <li className={navStyle.item} key={`${name}${idx}`}>
              <Link
                href={route}
                className={`${navStyle.link} ${
                  route === router ? navStyle.highlighted : undefined
                }`}
              >
                {name}
              </Link>
              {teamList.length !== 0 && name === 'Teams' && <SubNav />}
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
