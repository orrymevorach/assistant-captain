'use client';
import { createTeam, getUser } from '../../../airtable/utils';
import createStyle from './CreateTeam.module.css';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const CreateTeam = () => {
    const uid = Cookies.get('uid');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const input = e.target.teamName.value;
        const getUsersId = await getUser(uid);
        const { id } = getUsersId.users[0];
        await createTeam(input, id);
        router.push('/teams');
    };

    return (
        <div className={createStyle.container}>
            <h2>Create a team!</h2>
            <form className={createStyle.form} onSubmit={(e) => handleSubmit(e)}>
                <label className={createStyle.teamName}>
                    Name:
                    <input className={createStyle.input} type='text' name='teamName' required />
                </label>
                <button className={createStyle.button} type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateTeam;
