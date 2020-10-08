import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`

`;

const HeaderTitle = styled.h1`
    margin-bottom:15px;
    font-size: 65px;
`
const SubText = styled.div`
    max-width:250px;
    font-size: 27px;
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