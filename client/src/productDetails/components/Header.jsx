import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
  background-color: #363636;
  padding: 15px;
  justify-content: flex-start;
`;

const HeaderTitle = styled.h2`
  color: #F8F8F8;
`;

const Header = () => {
  return (
    <Head>
      <HeaderTitle>Cloud Collective</HeaderTitle>
    </Head>
  )
}

export default Header;