import React from 'react';
import Report from './Report';
import Helpful from './Helpful';

const formatDate = (date) => {
  const d = new Date(date);
  const [day, month, year] = [
    d.getDate(),
    d.toLocaleString('default', { month: 'long' }),
    d.getFullYear(),
  ];
  return `${month} ${day}, ${year}`;
};

const AnswererInfo = ({ answerId, username, date, helpfulness }) => (
  <small>
    {` by ${username}, ${formatDate(date)} | `}
    <Helpful id={answerId} helpfulness={helpfulness} />
    {' | '}
    <Report id={answerId} />
  </small>
);

export default AnswererInfo;
