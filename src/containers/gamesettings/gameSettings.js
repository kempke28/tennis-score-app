
import React, { useState } from 'react';
import { GeneralContainer, Button, GameInput } from '../../components';
import { Link } from 'react-router-dom';

import './style.css';
import * as ROUTES from "../../routes/routes";

export default function GameSettings({ children, ...props }) {
  //in case of any functions insert here or effects here
  const [isDouble, setIsDouble] = useState(false);

  return (
    <GeneralContainer>
      <div className="settingsbuttons">
        <Button onClick={() => setIsDouble(false)}>Singles</Button>
        <Button onClick={() => setIsDouble(true)}>Doubles</Button>
      </div>

      <GameInput>
        <GameInput.PlayerForm>
          <GameInput.InputContainer>
            <GameInput.Input>Player1</GameInput.Input>
            <GameInput.Input>Player2</GameInput.Input>
          </GameInput.InputContainer>

          {isDouble && (
            <GameInput.InputContainer>
              <GameInput.Input>Player3</GameInput.Input>
              <GameInput.Input>Player4</GameInput.Input>
            </GameInput.InputContainer>
          )}
        </GameInput.PlayerForm>
      </GameInput>

      <GameInput.PlayerForm>
        <GameInput.InputContainer direction={'row'}>
          <GameInput.Input type={'radio'}>7 Points</GameInput.Input>
          <GameInput.Input type={'radio'}>10 Points</GameInput.Input>
        </GameInput.InputContainer>
      </GameInput.PlayerForm>

      <div className="settingsbuttons">
          <Link to={ROUTES.Score}>
              <Button>Start normal</Button>
          </Link>
        <Link to={ROUTES.ScoreAdv}>
            <Button>Start adv</Button>
        </Link>
      </div>
    </GeneralContainer>
  );
}
