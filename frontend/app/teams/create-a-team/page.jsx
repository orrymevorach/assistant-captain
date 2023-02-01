'use client';
import { createTeam } from '@airtable/utils';
import createStyle from './CreateTeam.module.css';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useUser } from '@user-context';
import Loader from '@components/Loader/Loader';

const CreateTeam = () => {
  const { user, setUser } = useUser();
  const uid = Cookies.get('uid');
  const router = useRouter();

  if (!user[0]) return <Loader />;

  const handleSubmit = async e => {
    e.preventDefault();
    const teamName = e.target.teamName.value;
    const { insert_teams } = await createTeam(teamName, user[0].id, uid);
    const userCopy = JSON.parse(JSON.stringify(user));
    userCopy[0].teams.push(insert_teams[0]);
    setUser(userCopy);
    router.push('/teams');
  };

  return (
    <div className={createStyle.container}>
      <h2>Create a team!</h2>
      <form className={createStyle.form} onSubmit={e => handleSubmit(e)}>
        <label className={createStyle.teamName}>
          Name:
          <input
            className={createStyle.input}
            type='text'
            name='teamName'
            required
          />
        </label>
        <button className={createStyle.button} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTeam;
