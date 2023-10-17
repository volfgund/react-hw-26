import React, { createContext, useState, useEffect } from "react";
import Level1 from "./components/Level1";

export const UsersContext = createContext();

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <UsersContext.Provider value={users}>
      <Level1 />
    </UsersContext.Provider>
  );
}

export default App;