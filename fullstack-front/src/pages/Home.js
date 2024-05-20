import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Home() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8081/getUser");
    setUsers(result.data);
  };
  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8081/user/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-dark mx-3">View</button>
                  <Link
                    className="btn btn-outline-primary mx-2
                  "
                    to={`/editusers/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => deleteUsers(user.id)}
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
