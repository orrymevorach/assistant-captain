import { client, FIND_USER, CREATE_USER, CREATE_TEAM } from '../../gql';

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
        });
    } catch (error) {
        console.log(error);
    }
};

export const createTeam = async (teamName, id) => {
    try {
        await client.mutate({
            mutation: CREATE_TEAM,
            variables: { teamName, id },
        });
    } catch (error) {
        console.error(error);
    }
};
