import { gql } from '@apollo/client';

export const FIND_USER = gql`
    query FindUser($uid: String!) {
        users(uid: $uid) {
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
