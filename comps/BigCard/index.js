import React from 'react';
import styled from 'styled-components';

const BigCardBox = styled.div`
    width: 313px;
    height: 283px;
    background: #00C1CD;
    box-shadow: 6px 5px 21px rgba(10, 23, 34, 0.12);
    border-radius: 30px;
    display:flex;
    flex-direction:column;
`;

const BigCardSubtitle = styled.h2`
    color: #C1FBFF;
    margin-left:45px;
`

const BigCardText = styled.h1`
    color:#FFF;
    margin-left:45px;
    margin-top:-2px;
    max-width:200px;
`

const BigCard = ({title,subtitle})=>{
  return <BigCardBox>
    <BigCardSubtitle>{subtitle}</BigCardSubtitle>
    <BigCardText> {title} </BigCardText>
  </BigCardBox>
}

BigCard.defaultProps = {
  subtitle:"Big Card Subtitle",
  title:"Big Card Text"
}

export default BigCard;