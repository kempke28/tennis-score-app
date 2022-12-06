import React from 'react';
import { GeneralContainer } from './style/generalContainer';

export default function GenContainer({ children, height = '70vh', direction = 'column' }) {
  return (
    <GeneralContainer direction={direction} height={height}>
      {children}
    </GeneralContainer>
  );
}
