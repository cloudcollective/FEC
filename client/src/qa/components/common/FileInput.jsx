import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FileInput = ({
  name, label,
}) => (
  <>
    <label htmlFor={name}>
      {label}
      <StyledInput
        id={name}
        name={name}
        type="file"
        multiple
        accept="image/png, image/jpeg"
      />
    </label>
  </>
);

const StyledInput = styled.input`
  display: block;
  line-height: 1.5;
  color: #272727;
  margin-top: 5px;
`;

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FileInput;
