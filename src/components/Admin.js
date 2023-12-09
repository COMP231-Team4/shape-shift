import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Admin() {
  let navigate = useNavigate();
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("userLocal")) &&
      !JSON.parse(localStorage.getItem("userLocal")).admin
    ) {
      navigate("/");
    }
  });

  const usernames = ["user1", "user2", "user3"];
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
            {usernames.map((username, index) => (
              <tr key={index}>
                <td>{username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
