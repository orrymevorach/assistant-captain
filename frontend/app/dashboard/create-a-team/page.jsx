const CreateTeam = () => {
    const handleChange = (e) => {
        const input = e.target.value;
        console.log(input);
    };

    return (
        <form>
            <label>
                Team name:
                <input type='text' name='name' onChange={(e) => handleChange(e)} />
            </label>
        </form>
    );
};

export default CreateTeam;
