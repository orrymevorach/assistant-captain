const Player = ({ player }) => {
    console.log(player);
    return (
        <div>
            <h1>Members</h1>
            {player.map((member) => {
                return <div>{member.email}</div>;
            })}
        </div>
    );
};

export default Player;
