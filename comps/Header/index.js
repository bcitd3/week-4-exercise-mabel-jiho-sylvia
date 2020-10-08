import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`

`;

const HeaderTitle = styled.h1`
    margin-bottom:-10px;
`
const SubText = styled.h3`
    max-width:200px;
`

const Header = ({title, subtext})=>{
  return <HeaderBox>
      <HeaderTitle>{title}</HeaderTitle>
      <SubText>{subtext}</SubText>
  </HeaderBox>
}

Header.defaultProps = {
  title:"Header",
  subtext: "Welcome to my app about sources."
}

export default Header;