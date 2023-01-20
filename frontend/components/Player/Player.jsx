const Player = ({ player }) => {
    return (
        <div>
            <h1>Members</h1>
            {player.map((member, idx) => {
                let email = member.email;
                return <div key={`${email}${idx}`}>{email}</div>;
            })}
        </div>
    );
};

export default Player;
