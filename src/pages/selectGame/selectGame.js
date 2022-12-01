import React from 'react';
import HeaderContainer from '../../containers/header/header';
import GameSettings from '../../containers/gamesettings/gameSettings';
import { Button } from '../../components';

import './styles/selectGame.css';

export default function SelectGame() {
  return (
    <div className="container">
      <HeaderContainer />
      <GameSettings />
      <Button>Back</Button>
    </div>
  );
}
