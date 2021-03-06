import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import ButtonLink from './common/ButtonLink';

const Report = ({ id }) => {
  const [isReportable, setIsReportable] = useState(true);

  const reportAnswer = () => {
    if (isReportable) {
      axios.put(`/qa/answers/${id}/report`)
        .then((data) => {
          console.log('reported answer id', id, data);
          setIsReportable(false);
        })
        .catch((error) => {
          console.log('there was an error reporting answer id', id, error);
          setIsReportable(true);
        });
    }
  };

  return (
    <SmallText>
      {isReportable
        ? (
          <ButtonLink
            type="button"
            label="Report"
            onClick={reportAnswer}
          />
        )
        : (
          <p>Reported</p>
        )}
    </SmallText>
  );
};

const SmallText = styled.div`
  font-size: 0.8em;
`;

Report.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Report;
