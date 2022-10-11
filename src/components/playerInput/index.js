import React from 'react';
import { useState } from 'react';

import './style/player.css';

export default function PlayerInput({ children }) {
  return <form className="inputForm">{children}</form>;
}

PlayerInput.Input = function Input({ children, ...props }) {
  const [info, setInfo] = useState('Player Name');
  const type = props.type;
  const name = props.name;

  return (
    <label htmlFor="player">
      {children}
      <input
        id="player"
        className="inputPlayer"
        type={type}
        name={name}
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
    </label>
  );
};
