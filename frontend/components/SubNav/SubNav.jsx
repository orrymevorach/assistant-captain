const SubNav = () => {
    return (
        <>
            {teamList.length !== 0 && name === 'Teams' && (
                <ul className={navStyle.subUl}>
                    {teamList.map((team, idx) => {
                        return (
                            <li key={`${team}${idx}`}>
                                <Link href={`/teams/${team.id}`}>{team.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default SubNav;
