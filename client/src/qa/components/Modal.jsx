import React, { useState } from 'react';

const Modal = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      role="dialog"
      className="modal"
    >
    {isVisible &&
      <h3>Ask Your Question</h3>
      <h5>About the [Product Name Here]</h5>
      I am a modal div!}
    </div>
  );
};

export default Modal;
