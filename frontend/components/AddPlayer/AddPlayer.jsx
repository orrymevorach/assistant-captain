'use client';
import { useState } from 'react';
import {
  addToRoster,
  createDummyRecord,
  findUserByPhoneNumber,
} from '@airtable/utils';
import addStyle from './AddPlayer.module.css';
import { formatPhoneNumber, createPlayerIdArray } from 'utils';

const AddPlayer = ({ team, setTeamData }) => {
  const [openView, setOpenView] = useState(false);
  const [validationError, setValidationError] = useState('');
  const { teamId, teamData } = team;

  const toggleAddPlayerView = () => {
    setOpenView(prev => !prev);
    setValidationError('');
  };

  const handleChange = e => {
    const input = e.target.value;
    if (!input) setValidationError('');
  };

  const formValidation = e => {
    e.preventDefault();
    setValidationError('');
    const phoneNumber = e.target.phone.value;
    const pattern = /^\d+$/g;

    if (phoneNumber.length !== 10) {
      return setValidationError('Invalid phone number');
    }

    if (!pattern.test(phoneNumber)) {
      return setValidationError('Numbers Only');
    }

    submitPlayer(phoneNumber);
  };

  const submitPlayer = async phoneNumber => {
    let newPlayerRecord;
    // Phone number needs to be formatted (xxx) xxx-xxxx to find in Airtable
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    const numberExists = await findUserByPhoneNumber(formattedPhoneNumber);

    if (!numberExists.users.length) {
      const { insert_users } = await createDummyRecord(
        formattedPhoneNumber,
        teamId
      );
      newPlayerRecord = insert_users[0];
    } else {
      // Array containing string ID's needed for all users connected to this team
      // It is used to update airtable with the existing users
      const playerIdArray = createPlayerIdArray(teamData[0].players);
      // New users ID added to players array of ID's
      const addNewPlayer = [...playerIdArray, numberExists.users[0].id];
      await addToRoster(teamId, addNewPlayer);
      newPlayerRecord = numberExists.users[0];
    }
    updateTeamDataState(newPlayerRecord);
  };

  const updateTeamDataState = newPlayerRecord => {
    const teamDataCopy = JSON.parse(JSON.stringify(teamData));
    teamDataCopy[0].players.push(newPlayerRecord);
    setTeamData(teamDataCopy);
  };

  return (
    <div className={addStyle.container}>
      <button
        className={`${addStyle.addPlayer} ${openView && addStyle.selected}`}
        onClick={() => toggleAddPlayerView()}
      >
        Add Player
      </button>
      {openView && (
        <form className={addStyle.form} onSubmit={e => formValidation(e)}>
          <label className={addStyle.label}>
            Phone Number:
            <input
              className={addStyle.input}
              name='phone'
              onChange={e => handleChange(e)}
            />
          </label>
          <div className={addStyle.submitContainer}>
            <button className={addStyle.submit} type='submit'>
              Submit
            </button>
          </div>
          {validationError && (
            <div className={addStyle.error}>{`* ${validationError}`}</div>
          )}
        </form>
      )}
    </div>
  );
};

export default AddPlayer;
