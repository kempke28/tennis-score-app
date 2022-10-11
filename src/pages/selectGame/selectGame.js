import React from 'react';
import HeaderContainer from '../../containers/header';
import GameSettings from '../../containers/gamesettings/gameSettings';
import { Button } from '../../components';

import './styles/selectGame.css';

export default function SelectGame() {
  return (
    //functions
    // header - check
    //game type singles doubles
    //player types
    //scoretype
    //backbutton

    <div className="container">
      <HeaderContainer />
      <GameSettings />
      <Button>Back</Button>
    </div>
  );
}
