'use client';
import { findTeam } from '@airtable/utils';
import AddPlayer from '@components/AddPlayer/AddPlayer';
import Admin from '@components/Admin/Admin';
import Loader from '@components/Loader/Loader';
import Player from '@components/Player/Player';
import { useEffect, useState } from 'react';
import teamStyle from './Team.module.css';

const TeamPage = ({ params }) => {
  const teamId = params.team;
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      const { name, admins, players } = await findTeam(teamId);
      const data = [
        {
          name: name,
          admins: admins,
          players: players,
        },
      ];
      setTeamData(data);
    };
    fetchTeamData();
  }, []);

  if (!teamData.length) return <Loader />;
  const { name, admins, players } = teamData[0];

  return (
    <div className={teamStyle.container}>
      <h1>{name.toUpperCase()}</h1>
      <div className={teamStyle.members}>
        <Admin admin={admins} />
        <Player player={players} />
      </div>
      <AddPlayer team={{ teamId, teamData }} setTeamData={setTeamData} />
    </div>
  );
};

export default TeamPage;
