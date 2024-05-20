import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditUsers() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [users, setUsers] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = users;
  const onInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/user/${id}`, users);
    navigate("/");
  };
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8081/user/${id}`, users);
    setUsers(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                UserName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your UserName"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Email Address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary mx-4">
              Submit
            </button>
            <Link type="cancel" className="btn btn-danger mx-4" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
