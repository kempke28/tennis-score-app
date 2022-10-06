import React from 'react';
import { Header } from '../components';

export default function HeaderContainer({ children }) {
  //in case of any functions insert here or effects here
  return (
    <Header>
      <Header.Logo>logo</Header.Logo>
      {children}
    </Header>
  );
}
