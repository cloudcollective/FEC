import React from 'react';
import axios from 'axios';
import Report from './Report';
import Helpful from './Helpful';
import Divider from './Divider';

const formatDate = (date) => {
  const d = new Date(date);
  const [day, month, year] = [
    d.getDate(),
    d.toLocaleString('default', { month: 'long' }),
    d.getFullYear(),
  ];
  return `${month} ${day}, ${year}`;
};

const sendPutReqForHelpful = (answerId) => axios.put(`/qa/answers/${answerId}/helpful`);

const AnswererInfo = ({
  answerId, username, date, helpfulness,
}) => (
  <>
    <p className="user-info">{` by ${username}, ${formatDate(date)}`}</p>
    <Divider />
    <Helpful
      id={answerId}
      helpfulness={helpfulness}
      handleHelpful={sendPutReqForHelpful}
    />
    <Divider />
    <Report id={answerId} />
  </>
);

export default AnswererInfo;
