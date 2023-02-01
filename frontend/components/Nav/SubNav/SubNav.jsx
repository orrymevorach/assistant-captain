import subNavStyle from './SubNav.module.css';
import NavLink from '../NavLink';
import { useUser } from '@user-context';

const SubNav = () => {
  const { user } = useUser();
  const { teams } = user[0];

  return (
    <ul className={subNavStyle.list}>
      {teams.map((team) => {
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
