import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
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
    width: 215px;
    height:auto;

    .infotitle{
        color:#AFCF6B;
        font-size:27px;
    }
    
    .infotext{
    font-size: 18px;
    text-align: left;

    }

`;

const InfoCard = ({titletext,text})=>{
  return <InfoBox>
      <div className="infotitle">{titletext}</div>
      <div className="infotext">{text}</div>
  </InfoBox>
}
InfoCard.defaultProps = {
    titletext: "Infomation",
    text: "Hover your mouse over any card for a definition",
    numbertext:"123",
    Color: "#000"
}



export default InfoCard;