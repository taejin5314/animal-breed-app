import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 60px;
  right: -100px;
`;

function ExportButton({ state }) {


  const handleClick = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify({ "dogBreeds": state }, null, '\t'))}`
    const link = document.createElement('a');
    link.href = dataStr;
    link.download = "breed.json";
    link.click();

    const x = window.open();
    x.document.open();
    x.document.write('<html><body><pre>' + JSON.stringify({ "dogBreeds": state }, null, '\t') + '</pre></body></html>');
    x.document.close();
  }

  return (
    <>
      <Button onClick={handleClick}>
        Export!
      </Button>
    </>
  )
}

export default ExportButton
