import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Admin(props) {
  const { users } = props;
  let navigate = useNavigate();
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("userLocal")) &&
      !JSON.parse(localStorage.getItem("userLocal")).admin
    ) {
      navigate("/");
    }
  });

  return (
    <div className="admin-container">
      <h1>Users Information Master List</h1>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
