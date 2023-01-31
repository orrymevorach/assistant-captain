'use client';
import LogoutButton from '../LogoutButton';
import NavLink from '../NavLink';
import SubNav from '../SubNav/SubNav';
import navStyle from './ParentNav.module.css';
import { useUser } from '@user-context';

const ParentNav = () => {
  const { user } = useUser();
  const { teams } = user[0];
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
              {name === 'Teams' && teams.length !== 0 && <SubNav />}
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
