import { client, FIND_USER, CREATE_USER, CREATE_TEAM, FIND_TEAM } from '../../gql';

export const getUser = async (uid) => {
    try {
        const { data } = await client.query({
            query: FIND_USER,
            variables: { uid },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async (uid, email) => {
    try {
        await client.mutate({
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
    } catch (error) {
        console.log(error);
    }
};

export const createTeam = async (teamName, id, uid) => {
    try {
        await client.mutate({
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
    } catch (error) {
        console.error(error);
    }
};

export const findTeam = async (teamId) => {
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
