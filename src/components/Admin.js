import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Admin(props) {
  const { users, deleteUser } = props;
  let navigate = useNavigate();
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("userLocal")) &&
      !JSON.parse(localStorage.getItem("userLocal")).admin
    ) {
      navigate("/");
    }
  });

  function handleDelete(id) {
    deleteUser(id);
  }

  return (
    <div className="admin-container">
      <h1>Users Information Master List</h1>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
