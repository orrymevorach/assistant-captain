import { gql } from '@apollo/client';

export const FIND_USER = gql`
    query FindUser($uid: String!) {
        users(uid: $uid) {
            id
            email
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($email: String!, $uid: String!) {
        insert_users(email: $email, uid: $uid) {
            email
            uid
        }
    }
`;

export const CREATE_TEAM = gql`
    mutation CreateTeam($teamName: String!, $id: String!) {
        insert_teams(name: $teamName, players: $id) {
            id
        }
    }
`;
