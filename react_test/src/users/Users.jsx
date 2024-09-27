import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid={"user-item"}>
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
