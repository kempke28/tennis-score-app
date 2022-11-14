import React from 'react';
import { StyledButton, SettingsButton } from './style/button';

export default function Button({children, ...props }) {
  return (

    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

Button.SetttingsButton = function SetButton({ children, ...Props }) {
  return <SettingsButton {...Props}>{children}</SettingsButton>;
};


