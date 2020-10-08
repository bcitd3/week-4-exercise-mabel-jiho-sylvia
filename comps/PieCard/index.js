import React from 'react';
import styled from 'styled-components';

const PieCardBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:216px;
    align-items:center;

    .text {
        text-align: center;
        font-size:27px;
    }

    .pie-wrapper {
        padding:auto;
        
        background:
            radial-gradient(
                circle closest-side,
                white 0,
                white 55%,
                transparent 45.54%,
                transparent 66%,
                white 0
            ),
            conic-gradient(
                from 261deg,
                #f5f5f5 0,
                #f5f5f5 84.4%,
                #729cf0 0,
                #729cf0 100%
        );
        position: relative;
        width: 150px;
        min-height: 150px;
        margin: 0;
    }
    
    .pie-wrapper span:after {
        display: inline-block;
        content: "";
        width: 0.8em;
        height: 0.8em;
        margin-left: 0.4em;
        height: 0.8em;
        border-radius: 0.2em;
        background: currentColor;
    }

`;

const PieCard = ({text, pienumber})=>{
  return <PieCardBox>
      <div className="pie-wrapper">
          {pienumber}%
      </div>
      <div className="text">{text}</div>
  </PieCardBox>
      
}
PieCard.defaultProps = {
    text: "text",
    pienumber:"23.5"
}



export default PieCard;