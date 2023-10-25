import { useState } from "react";
import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  function addUserHandler(name, age) {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: name, age: age, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <CreateUser onCreateUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
