const Player = ({ player }) => {
  return (
    <div>
      <h1>Members</h1>
      {player.map((member) => {
        const email = member.email;
        return <div key={`${email}`}>{email}</div>;
      })}
    </div>
  );
};

export default Player;
