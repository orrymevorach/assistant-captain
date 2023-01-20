import { findTeam } from '../../../airtable/utils';
import Admin from '../../../components/Admin/Admin';
import Player from '../../../components/Player/Player';
import teamStyle from './Team.module.css';

const TeamPage = async ({ params }) => {
    const teamId = params.team;
    const { name, admins, players } = await findTeam(teamId);

    return (
        <div>
            <h1>{name.toUpperCase()}</h1>
            <div className={teamStyle.personContainer}>
                <Admin admin={admins} />
                <Player player={players} />
            </div>
        </div>
    );
};

export default TeamPage;
