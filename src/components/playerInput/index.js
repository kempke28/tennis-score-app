import React from 'react';
import {
  GameInputContainer,
  PlayerForm,
  InputContainer,
  LabelPlayer,
  InputPlayer
} from './style/style';

import { useState } from 'react';

export default function GameInput({ children }) {
  return <GameInputContainer>{children}</GameInputContainer>;
}

GameInput.PlayerForm = function GameInputPlayerForm({ children, ...props }) {
  return <PlayerForm>{children}</PlayerForm>;
};

GameInput.InputContainer = function GameInputContainer({
  children,
  direction = 'column',
  ...props
}) {
  return <InputContainer direction={direction}>{children}</InputContainer>;
};

GameInput.Input = function Input({ children, type, name, value, ...props }) {
  const [info, setInfo] = useState('Player Name');

  return (
    <LabelPlayer htmlFor="player">
      {children}
      <InputPlayer
        id="player"
        className="inputPlayer"
        type={type}
        name={name}
        value={value}
        placeholder={info}
        onChange={(e) => setInfo(e.target.value)}
      />
    </LabelPlayer>
  );
};
