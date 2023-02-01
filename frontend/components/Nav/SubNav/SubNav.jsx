'use client';
import subNavStyle from './SubNav.module.css';
import NavLink from '../NavLink';
import { useUser } from '@user-context';
import { useState, useEffect } from 'react';

const SubNav = () => {
  const { user } = useUser();
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    if (user[0].teams) {
      setTeams(user[0].teams);
    }
  }, [user]);

  return (
    <ul className={subNavStyle.list}>
      {teams.map(team => {
        const route = `/teams/${team.id}`;
        const name = team.name;

        return (
          <li className={subNavStyle.item} key={team.id}>
            <NavLink routes={{ route, name }} />
          </li>
        );
      })}
    </ul>
  );
};

export default SubNav;
