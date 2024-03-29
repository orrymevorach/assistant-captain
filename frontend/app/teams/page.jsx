'use client';
import { useRouter } from 'next/navigation';
import teamsStyle from './Teams.module.css';
import { useUser } from '@user-context';
import Loader from '@components/Loader/Loader';

const Teams = () => {
  const router = useRouter();
  const { user } = useUser();
  const teams = user.length ? user[0].teams : [];

  if (!user.length) return <Loader />;

  const selectTeam = teamId => {
    router.push(`/teams/${teamId}`);
  };

  return (
    <div className={teamsStyle.container}>
      <h1>Your Teams</h1>
      <div className={teamsStyle.teamContainer}>
        {teams.length ? (
          teams.map((team, idx) => {
            return (
              <div
                className={teamsStyle.teamCard}
                onClick={() => selectTeam(team.id)}
                key={`${team}${idx}`}
              >
                <p>{team.name}</p>
              </div>
            );
          })
        ) : (
          <p> {`It looks like you don't have any teams :(`}</p>
        )}
      </div>
    </div>
  );
};

export default Teams;
