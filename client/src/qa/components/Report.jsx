import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './common/ButtonLink';
// import axios from 'axios';

const Report = ({ id }) => {
  const [isReportable, setIsReportable] = useState(true);

  const reportAnswer = () => {
    if (isReportable) {
      console.log('youve been reported to the higher authorities', id);
    }
    setIsReportable(false);
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
        : 'Reported'}
    </>
  );
};

Report.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Report;
