import React from 'react';
import { GeneralContainer, Button, PlayerInput } from '../../components';
import './style.css';

export default function GameSettings({ children }) {
  //in case of any functions insert here or effects here

  return (
    <GeneralContainer>
      <div>
        <Button>singles</Button>
        <Button className="optionsButton">Doubles</Button>
      </div>

      <div>
        <PlayerInput>
          {children}
          <PlayerInput.Input>player1</PlayerInput.Input>
          <PlayerInput.Input>player2</PlayerInput.Input>
          <PlayerInput.Input>player3</PlayerInput.Input>
          <PlayerInput.Input>player4</PlayerInput.Input>
        </PlayerInput>
      </div>

      <div>
        <PlayerInput>
          <PlayerInput.Input type={'radio'}>7 Points</PlayerInput.Input>
          <PlayerInput.Input type={'radio'}>10 Points</PlayerInput.Input>
        </PlayerInput>
      </div>

      <div>
        <Button>Start normal</Button>
        <Button>Start adv</Button>
      </div>
    </GeneralContainer>
  );
}
