import React, { useContext } from "react";
import { UsersContext } from "../App";

function Level4() {
  const users = useContext(UsersContext);

  return (
    <div>
      <h2>Level 4</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Level4;
