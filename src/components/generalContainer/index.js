import React from 'react';
import { GeneralContainer } from './style/generalContainer';

export default function GenContainer({ children, height = '70vh' }) {
  return <GeneralContainer height={height}>{children}</GeneralContainer>;
}
