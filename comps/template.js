import React from 'react';
import styled from 'styled-components';

const CompContainer = styled.div`
  //styles
`;

const Comp = ({propsGoesHere})=>{
  return <CompContainer>
    Comp
  </CompContainer>
}

Comp.defaultProps = {
  //default props
}

export default Comp;