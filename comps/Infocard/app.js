import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 6px 5px 21px rgba(10, 23, 34, 0.12);
    border-radius: 10px 10px 10px 0px;
    max-width: 215px;
    min-height: 147px;
    display: flex;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    max-width: 182px;
    margin-left: 21px;
`;

const Header = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    color: #AFCF6B;
    margin-top: 24px;
    margin-bottom: 11px;
`;

const Content = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #000000;

`;

const Infocard = ({Heading, text})=>{
  return <InfoWrapper>
      <ContentWrapper>
        <Header>{Heading}</Header>
        <Content>{text}</Content>
      </ContentWrapper>
  </InfoWrapper>
}

Infocard.defaultProps = {
  Heading: "Information",
  text: "Hover your mouse over any card for a definition."
}

export default Infocard; 