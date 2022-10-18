import React from 'react';
import { GeneralContainer, Button, GameInput } from '../../components';
import './style.css';

export default function GameSettings({ children, ...props }) {
  //in case of any functions insert here or effects here

  return (
    <GeneralContainer>
      <div className="settingsbuttons">
        <Button>singles</Button>
        <Button>Doubles</Button>
      </div>

      <GameInput>
        <GameInput.PlayerForm>
          <GameInput.InputContainer>
            <GameInput.Input>player1</GameInput.Input>
            <GameInput.Input>player2</GameInput.Input>
          </GameInput.InputContainer>
          <GameInput.InputContainer>
            <GameInput.Input>player3</GameInput.Input>
            <GameInput.Input>player4</GameInput.Input>
          </GameInput.InputContainer>
        </GameInput.PlayerForm>
      </GameInput>

      <GameInput.PlayerForm>
        <GameInput.InputContainer direction={'row'}>
          <GameInput.Input type={'radio'}>7 Points</GameInput.Input>
          <GameInput.Input type={'radio'}>10 Points</GameInput.Input>
        </GameInput.InputContainer>
      </GameInput.PlayerForm>

      <div className="settingsbuttons">
        <Button>Start normal</Button>
        <Button>Start adv</Button>
      </div>
    </GeneralContainer>
  );
}
