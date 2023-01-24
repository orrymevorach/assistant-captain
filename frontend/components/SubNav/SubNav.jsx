import { useContext } from 'react';
import Link from 'next/link';
import { TeamsContext } from '../../app/teams/layout';
import subNavStyle from './SubNav.module.css';

const SubNav = () => {
  const { teamList } = useContext(TeamsContext);
  return (
    <ul className={subNavStyle.list}>
      {teamList.map((team, idx) => {
        return (
          <li className={subNavStyle.item} key={`${team}${idx}`}>
            <Link href={`/teams/${team.id}`}>{team.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubNav;
