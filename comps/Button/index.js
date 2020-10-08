import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.div`
    height: 65px;
    width: 246px;
    border-radius: 10px;
    background: #AFCF6B;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ButtonText = styled.div`
    color:#FFF;
    font-size:27px;
`

const Button = ({text})=>{
  return <ButtonBox>
      <ButtonText>{text}</ButtonText>
  </ButtonBox>
}

Button.defaultProps = {
  text:"B u t t o n"
}

export default Button;