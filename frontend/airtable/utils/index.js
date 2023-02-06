import {
  client,
  FIND_USER,
  CREATE_USER,
  CREATE_TEAM,
  FIND_TEAM,
  ADD_PLAYER,
  SEARCH_PHONE_NUMBER,
  CREATE_DUMMY_USER,
} from '../../gql';

export const getUser = async uid => {
  try {
    const { data } = await client.query({
      query: FIND_USER,
      variables: { uid },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (uid, email) => {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_USER,
      variables: { email, uid },
      refetchQueries: [
        {
          query: FIND_USER,
          variables: { uid },
        },
      ],
      awaitRefetchQueries: true,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTeam = async (teamName, id, uid) => {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_TEAM,
      variables: { teamName, id },
      refetchQueries: [
        {
          query: FIND_USER,
          variables: { uid },
        },
      ],
      awaitRefetchQueries: true,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const findTeam = async teamId => {
  try {
    const { data } = await client.query({
      query: FIND_TEAM,
      variables: { teamId },
    });
    return data.teams[0];
  } catch (error) {
    console.error(error);
  }
};

export const findUserByPhoneNumber = async phoneNumber => {
  try {
    const { data } = await client.query({
      query: SEARCH_PHONE_NUMBER,
      variables: {
        phoneNumber,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createDummyRecord = async (phoneNumber, teamId) => {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_DUMMY_USER,
      variables: {
        phoneNumber,
        teamId,
      },
      refetchQueries: [
        {
          query: FIND_TEAM,
          variables: {
            teamId,
          },
        },
      ],
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addToRoster = async (teamId, playerArray) => {
  try {
    const { data } = await client.mutate({
      mutation: ADD_PLAYER,
      variables: { teamId, playerArray },
      refetchQueries: [
        {
          query: FIND_TEAM,
          variables: {
            teamId,
          },
        },
      ],
      awaitRefetchQueries: true,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
