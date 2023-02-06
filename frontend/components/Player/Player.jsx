const Player = ({ player }) => {
  return (
    <div>
      <h1>Members</h1>
      <div>
        {player.map(member => {
          const phoneNumber = member.phoneNumber;
          return <div key={phoneNumber}>{phoneNumber}</div>;
        })}
      </div>
    </div>
  );
};

export default Player;
