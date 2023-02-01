'use client';
import { useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@firebase/config';
import Cookies from 'js-cookie';
import { getUser, createUser } from '@airtable/utils';
import teamsStyle from './Teams.module.css';
import { TeamsContext } from './layout';

const Teams = () => {
  const router = useRouter();
  const { teamList, setTeamList } = useContext(TeamsContext);

  const selectTeam = (teamId) => {
    router.push(`/teams/${teamId}`);
  };

  useEffect(() => {
    const handleLoginOnPageLoad = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        Cookies.remove('uid');
        router.push('/');
      }

      if (firebaseUser) {
        const { uid, email } = firebaseUser;
        const doesUserExist = await getUser(uid);
        const hasAirtableRecord = doesUserExist.users.length !== 0;

        if (!hasAirtableRecord) {
          await createUser(uid, email);
        } else {
          const teamArray = doesUserExist.users[0].teams;
          setTeamList(teamArray);
        }
      }
    });

    return () => handleLoginOnPageLoad();
  }, []);

  return (
    <div className={teamsStyle.container}>
      <h1>Your Teams</h1>
      <div className={teamsStyle.teamContainer}>
        {teamList.length ? (
          teamList.map((team, idx) => {
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
