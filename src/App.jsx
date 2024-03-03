import React, { useState } from "react";
import UserForm from "./components/Form/UserForm";
import UserList from "./components/List/UserList";
import Header from "./components/Header/Header";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addNewUser = (personInfo) => {
    setUserList((prevState) => [...prevState, personInfo]);
  };
  const deleteUser = (userId) => {
    setUserList((prevState) => prevState.filter((user) => user.id !== userId));
  };
  return (
    <div className="container">
      <Header />
      <UserForm addNewUser={addNewUser} userList={userList} />
      <UserList userList={userList} deleteUser={deleteUser} />
    </div>
  );
};
export default App;
