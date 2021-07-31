import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './common/ButtonLink';

const Helpful = ({ id, helpfulness }) => {
  const [isClickable, setIsClickable] = useState(true);

  const markHelpful = () => {
    setIsClickable(false);
    console.log('marked as helpful', id);
    // do some api call
  };

  return (
    <>
      {'Helpful? '}
      {isClickable
        ? (
          <ButtonLink
            type="button"
            label="Yes"
            onClick={markHelpful}
          />
        )
        : 'Yes'}
      {` (${helpfulness})`}
    </>
  );
};

Helpful.propTypes = {
  id: PropTypes.number.isRequired,
  helpfulness: PropTypes.number.isRequired,
};

export default Helpful;
