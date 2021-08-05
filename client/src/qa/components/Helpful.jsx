import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './common/ButtonLink';

const Helpful = ({ id, helpfulness, handleHelpful }) => {
  const [isReportableHelpful, setIsReportableHelpful] = useState(true);
  const [displayedHelpfulness, setdisplayedHelpfulness] = useState(helpfulness);

  const markAsHelpful = () => {
    if (isReportableHelpful) {
      handleHelpful(id)
        .then((data) => {
          setIsReportableHelpful(false);
          setdisplayedHelpfulness(displayedHelpfulness + 1);
          console.log('marked as helpful', id, data);
        })
        .catch((error) => {
          console.log('unable to to mark as helpful', error);
          setIsReportableHelpful(true);
        });
    }
  };

  return (
    <>
      <p className="qa-meta">
        Helpful?&nbsp;&nbsp;
        {isReportableHelpful
          ? (
            <ButtonLink
              type="button"
              label="Yes"
              onClick={markAsHelpful}
            />
          )
          : 'Yes'}
        {` (${displayedHelpfulness})`}
      </p>
    </>
  );
};

Helpful.propTypes = {
  id: PropTypes.number.isRequired,
  helpfulness: PropTypes.number.isRequired,
  handleHelpful: PropTypes.func.isRequired,
};

export default Helpful;
