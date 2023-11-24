import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/popAnimation.css'; // Create this CSS file

const SuccessPop = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);

    // Set a timeout to hide the success message after a few seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleSuccess}>Done</button>

      <CSSTransition
        in={showSuccess}
        timeout={500}
        classNames="success-pop"
        unmountOnExit
      >
        <div className="success-message">Success!</div>
      </CSSTransition>
    </div>
  );
};

export default SuccessPop;
