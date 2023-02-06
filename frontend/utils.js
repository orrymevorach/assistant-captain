export const formatPhoneNumber = phoneNumber => {
  const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
  return `(${match[1]}) ${match[2]}-${match[3]}`;
};

export const createPlayerIdArray = teamsList => {
  return teamsList.map(team => team.id);
};
