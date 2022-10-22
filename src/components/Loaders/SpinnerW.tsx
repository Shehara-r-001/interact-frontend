import React from 'react';
import { LineWave } from 'react-loader-spinner';

const SpinnerW = () => {
  return (
    <LineWave
      height='80'
      width='100'
      color='#333333'
      ariaLabel='line-wave'
      wrapperStyle={{}}
      wrapperClass='loader'
      visible={true}
      firstLineColor='#8c8c8c'
      middleLineColor='#4d4d4d'
      lastLineColor='#1a1a1a'
    />
  );
};

export default SpinnerW;
