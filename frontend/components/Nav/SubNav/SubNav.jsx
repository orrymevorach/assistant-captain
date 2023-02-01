import { useContext } from 'react';
import { TeamsContext } from '@app/teams/layout';
import subNavStyle from './SubNav.module.css';
import NavLink from '../NavLink';

const SubNav = () => {
  const { teamList } = useContext(TeamsContext);

  return (
    <ul className={subNavStyle.list}>
      {teamList.map((team) => {
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
