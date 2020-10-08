import React from 'react';
import styled from 'styled-components';

const Infocard = styled.div`
    background: #FFFFFF;
    box-shadow: 6px 5px 21px rgba(10, 23, 34, 0.12);
    border-radius: 10px 10px 10px 0px;
`;

const Header = styled.div`

`;

const Content = styled.div`

`;

const Infocard = ({H1, text})=>{
  return <InfoWrapper>
      <Header>{H1}</Header>
      <Content>{text}</Content>
  </InfoWrapper>
}

Infocard.defaultProps = {
  H1: "Information",
  text: "Hover your mouse over any card for a definition."
}

export default Infocard;