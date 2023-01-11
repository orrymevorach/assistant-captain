'use client';
import { createTeam } from '../../../airtable/utils';
import createStyle from './CreateTeam.module.css';
import { useRouter } from 'next/navigation';

const CreateTeam = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const input = e.target.teamName.value;
        await createTeam(input);
        router.push('/dashboard/teams');
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
