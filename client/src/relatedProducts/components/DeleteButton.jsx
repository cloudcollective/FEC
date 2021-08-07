import React from 'react';

const DeleteButton = () => {
  const ten = 10;
  return (
    <div
      className="buttontype"
      role="button"
      onKeyUp={() => { console.log('secretMessage'); }}
      onClick={() => { console.log('hi'); }}
      tabIndex={0}
    >
      X
    </div>
  );
};

export default DeleteButton;
