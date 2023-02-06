import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $uid: String!) {
    insert_users(email: $email, uid: $uid) {
      email
      uid
    }
  }
`;

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
      id
      name
      admins {
        email
        id
      }
      players {
        id
        phoneNumber
      }
    }
  }
`;

export const CREATE_DUMMY_USER = gql`
  mutation CreateDummyUser($phoneNumber: String!, $teamId: [String]) {
    insert_users(phoneNumber: $phoneNumber, teams: $teamId) {
      id
      phoneNumber
    }
  }
`;

export const SEARCH_PHONE_NUMBER = gql`
  query SearchPhoneNumber($phoneNumber: String!) {
    users(phoneNumber: $phoneNumber) {
      id
      phoneNumber
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation AddPlayer($teamId: String!, $playerArray: [String!]!) {
    update_teams(id: $teamId, players: $playerArray) {
      players {
        id
        phoneNumber
      }
    }
  }
`;
