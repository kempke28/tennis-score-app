import React from 'react';
import './style/header.css';

export default function Header({ children }) {
  return <div className="headerContainer">{children}</div>;
}

//Change for img tag once you have the logo and source of the logo
Header.Logo = function HeaderLogo({ children }) {
  return <h2 className="logo">{children}</h2>;
};
