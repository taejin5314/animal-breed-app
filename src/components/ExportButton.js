import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 60px;
  right: -100px;
`;

function ExportButton({ state }) {
  return (
    <Button onClick={() => console.log(state)}>
      Export!
    </Button>
  )
}

export default ExportButton
