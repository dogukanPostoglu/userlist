import React from "react";
import SingleUser from "./SingleUser";
const UserList = ({ userList, deleteUser }) => {
  return (
    <section className="users">
      {userList.length === 0 ? (
        <h2>No user to show</h2>
      ) : (
        userList.map((user) => {
          return (
            <SingleUser key={user.id} info={user} deleteUser={deleteUser} />
          );
        })
      )}
    </section>
  );
};
export default UserList;
