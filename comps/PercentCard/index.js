import React from 'react';
import styled from 'styled-components';

const PercentBox = styled.div`
    background: #FFFFFF;
    box-shadow: 6px 5px 21px rgba(10, 23, 34, 0.12);
    border-radius: 10px;
    display:inline-flex;
    width:100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-text:center;
    padding:20px;
    padding-top:40px;


    .number {
        font-size:40px;
        font-weight:bold;
        color:${props=>props.Color ? props.Color : "#000"};
    }

    .text {
        font-size:27px;
        color:#000;
    }
`;

const PercentCard = ({text,numbertext, Color})=>{
  return <PercentBox>
    <div className="number" color={Color}>{numbertext}</div>
    <div className="text">{text}</div>
  </PercentBox>
}
PercentCard.defaultProps = {
    text: "text",
    numbertext:"123",
    Color: "#00c1cd"
}



export default PercentCard;