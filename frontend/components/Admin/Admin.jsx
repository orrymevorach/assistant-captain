const Admin = ({ admin }) => {
  return (
    <div>
      <h1>Team Captains</h1>
      {admin.map(admin => {
        return <div key={admin.id}>{admin.email}</div>;
      })}
    </div>
  );
};

export default Admin;
