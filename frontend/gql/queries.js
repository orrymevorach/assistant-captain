import { gql } from '@apollo/client';

export const FIND_USER = gql`
  query FindUser($uid: String!) {
    users(uid: $uid) {
      id
      email
      teams {
        id
        name
      }
      admin {
        id
      }
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
  mutation CreateTeam($teamName: String!, $id: [String]) {
    insert_teams(name: $teamName, players: $id, admins: $id) {
      id
      name
    }
  }
`;

export const FIND_TEAM = gql`
  query FindTeam($teamId: String!) {
    teams(id: $teamId) {
      name
      admins {
        email
        id
      }
      players {
        email
        phoneNumber
      }
    }
  }
`;
