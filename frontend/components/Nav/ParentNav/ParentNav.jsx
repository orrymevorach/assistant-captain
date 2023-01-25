'use client';
import { useContext } from 'react';
import { TeamsContext } from '../../../app/teams/layout';
import LogoutButton from '../LogoutButton';
import NavLink from '../NavLink';
import SubNav from '../SubNav/SubNav';
import navStyle from './ParentNav.module.css';

const ParentNav = () => {
  const { teamList } = useContext(TeamsContext);

  const navRoutes = [
    { name: 'Teams', route: '/teams' },
    { name: 'Create A Team', route: '/teams/create-a-team' },
  ];

  return (
    <nav className={navStyle.container}>
      <ul className={navStyle.list}>
        {navRoutes.map(({ name, route }) => {
          return (
            <li className={navStyle.item} key={name}>
              <NavLink routes={{ name, route }} />
              {name === 'Teams' && teamList.length !== 0 && <SubNav />}
            </li>
          );
        })}
        <li className={navStyle.list}>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default ParentNav;
