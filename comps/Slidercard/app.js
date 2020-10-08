import React from 'react';
import styled from 'styled-components';

const SliderWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 6px 5px 21px rgba(10, 23, 34, 0.12);
    border-radius: 10px;
    max-width: 290px;
    min-height: 142px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Number = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    color: #00C1CD;
    margin-top: 16px;
`;

const BarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 260px;
    min-height: 62px;
    position: relative;
    top: -31px;

`;

const Marker = styled.div`
    height: 26px;
    width: 2px;
    background-color: #000000;
    position: relative;
    right: 12%;
    z-index: 1;
`;

const MinMaxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MinMax = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
`;

const Bar = styled.div`
    height: 10px;
    width: 253px;
    background-color: #CEE861;
    border-radius: 10px;
`;

const ValueWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    color: #000000;
    margin-top: 7px;

`;

const MinVal = styled.div`
  
`;

const MaxVal = styled.div`
  
`;

const Slidercard = ({Num, MinValue, MaxValue})=>{
  return <SliderWrapper>
      <Number>{Num}</Number>
      <Marker/>
      <BarWrapper>
          <MinMaxWrapper><MinMax>Min</MinMax>
          <MinMax>Max</MinMax></MinMaxWrapper>
          <Bar/>
          <ValueWrapper>
              <MinVal>{MinValue}</MinVal>
              <MaxVal>{MaxValue}</MaxVal>
            </ValueWrapper>
      </BarWrapper>
  </SliderWrapper>
}

/*Slidercard.defaultProps = {
  //default props
}*/

export default Slidercard;