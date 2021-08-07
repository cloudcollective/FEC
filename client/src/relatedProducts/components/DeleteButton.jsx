import React from 'react';

const DeleteButton = ({ setFavorite }) => (
  <div
    className="buttontype"
    role="button"
    onKeyUp={() => { console.log('secretMessage'); }}
    onClick={() => {
      setFavorite();
    }}
    tabIndex={0}
  >
    X
  </div>
);

export default DeleteButton;
