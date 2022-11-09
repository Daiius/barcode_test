import React, { useState, useEffect } from 'react';

import jsbarcode from 'jsbarcode';

const MainContainer = () => {

  useEffect(() => {
    jsbarcode("#barcode", "Hello, React!");
  }, [])

  return (
    <>
      <>Hello, React!</>
      <svg id="barcode"></svg>
    </>
  );
};

export default MainContainer;
