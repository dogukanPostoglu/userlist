import React from "react";
const SingleUser = ({ info, deleteUser }) => {
  const { id, userName, userSalary } = info;
  const handleDeleteUser = () => {
    deleteUser(id);
  };
  return (
    <article className="user" onClick={handleDeleteUser}>
      <img
        className="user-image"
        src="https://i.pravatar.cc/300"
        alt="user-img"
      />
      <h3>{userName}</h3>
      <h3>{userSalary} $</h3>
    </article>
  );
};
export default SingleUser;
