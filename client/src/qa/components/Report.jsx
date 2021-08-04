import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ButtonLink from './common/ButtonLink';

const Report = ({ id }) => {
  const [isReportable, setIsReportable] = useState(true);

  const reportAnswer = () => {
    if (isReportable) {
      axios.put(`/qa/answers/${id}/report`)
        .then(setIsReportable(false))
        .catch(() => {
          setIsReportable(true);
        });
    }
  };

  return (
    <>
      {isReportable
        ? (
          <ButtonLink
            type="button"
            label="Report"
            onClick={reportAnswer}
          />
        )
        : (
          <p className="qa-meta">Reported</p>
        )}
    </>
  );
};

Report.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Report;
