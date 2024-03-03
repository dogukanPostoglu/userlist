import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
const UserForm = ({ addNewUser, userList }) => {
  const [userName, setUserName] = useState("");
  const [userSalary, setUserSalary] = useState(0);
  const [error, setError] = useState(null);
  const minSalaryAmount = 5000;
  const closeModal = () => {
    setError(null);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = userName.trim().toLowerCase();
    console.log(user);
    if (user.length === 0) {
      setError({
        errorHeader: "UserName Error",
        errorMessage: "This area cannot be blank!",
      });
    } else if (userList.find((person) => person.userName === user)) {
      setError({
        errorHeader: "UserName already exists!",
        errorMessage: "Try to enter a different user!",
      });
    } else if (userSalary < minSalaryAmount) {
      setError({
        errorHeader: "UserSalary Error",
        errorMessage: "Every user should earn at least more than 5000$",
      });
    } else {
      addNewUser({ id: Math.random() * 1000, userName: user, userSalary });
    }
  };
  return (
    <>
      <div className="user-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user-name">User Name: </label>
            <input
              type="text"
              id="user-name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="user-salary">User Salary: </label>
            <input
              type="number"
              id="user-salary"
              value={userSalary}
              onChange={(e) => setUserSalary(Number(e.target.value))}
            />
          </div>
          <button className="add-btn">Add</button>
        </form>
      </div>
      {error && <ErrorModal error={error} closeModal={closeModal} />}
    </>
  );
};
export default UserForm;
