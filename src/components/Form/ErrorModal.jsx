import React from "react";
const ErrorModal = ({ error, closeModal }) => {
  const { errorHeader, errorMessage } = error;
  const handlePropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="error-container" onClick={closeModal}>
      <div className="error-content" onClick={handlePropagation}>
        <span className="close-modal" onClick={closeModal}>
          X
        </span>
        <div className="error-header">
          <h2>{errorHeader}</h2>
        </div>
        <div className="error-info">
          <h2>{errorMessage}</h2>
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
