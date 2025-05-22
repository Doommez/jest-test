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

  const onDelete = async (id)=>{
    setUsers(users.filter(user => user.id !== id));
  }

  useEffect(() => {
    loadData();
  }, []);

  if (users.length === 0){
    return <div id={"loading"}>Loading</div>
  }

  return (
    <div data-testid={"users-page"}>
      {users.map((user) => (
          <>
        <Link to={`/users/${user.id}`} key={user.id} id={"user-item"}>
          {user.name}
        </Link>
        <button id={"user-delete"} className="btn btn-primary" onClick={()=>onDelete(user.id)}>
           delete
         </button>
          </>
      ))}
    </div>
  );
};

export default Users;
