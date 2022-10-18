import React from 'react';
import { Button, SettingsButton } from './style/button';

export default function BasicButton({ to, children, ...props }) {
  return (
    <Button to={to} {...props}>
      {children}
    </Button>
  );
}

BasicButton.SetttingsButton = function SetButton({ children, ...Props }) {
  return <SettingsButton {...Props}>{children}</SettingsButton>;
};
