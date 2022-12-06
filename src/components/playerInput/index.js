import React from 'react';
import {
  GameInputContainer,
  PlayerForm,
  InputContainer,
  LabelPlayer,
  InputPlayer
} from './style/style';

export default function GameInput({ children }) {
  return <GameInputContainer>{children}</GameInputContainer>;
}

GameInput.PlayerForm = function GameInputPlayerForm({ children }) {
  return <PlayerForm>{children}</PlayerForm>;
};

GameInput.InputContainer = function GameInputContainer({ children, direction = 'column' }) {
  return <InputContainer direction={direction}>{children}</InputContainer>;
};

GameInput.Input = function Input({ children, ...props }) {
  return (
    <LabelPlayer htmlFor="player">
      {children}
      <InputPlayer {...props} />
    </LabelPlayer>
  );
};
