import React, { useState } from 'react';
import { GeneralContainer, Button, GameInput } from '../../components';
import { useNavigate } from 'react-router-dom';
import { createSetsCollection, saveMatches } from '../../firebase/service/matches.service';

import './style.css';
import * as ROUTES from '../../routes/routes';

export default function GameSettings({ children, ...props }) {
  const navigate = useNavigate();

  const [matchType, setMatchType] = useState(false);
  const [matchSettings, setMatchSettings] = useState({
    matchType: '', //input
    player1: '', //input
    player2: '', //input
    player3: '', //input
    player4: '', //input
    tieBreak: '', //radio input
    finalScore: [], //score id
    profilePicUrl: ''
  });

  const handleChange = (e) => {
    e.persist();
    setMatchSettings((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (path) => {
    console.log('handlechange MatchSettings ', matchSettings);
    const newMatchId = await saveMatches(matchSettings);
    await createSetsCollection(newMatchId);
    if (newMatchId) {
      navigate(path + '/' + newMatchId);
    } else {
      navigate(ROUTES.SelectGame);
    }
  };

  return (
    <GeneralContainer>
      <div className="settingsButtons">
        <Button
          type="button"
          name="matchType"
          value="Singles"
          onClick={(e) => [handleChange(e), setMatchType(false)]}>
          Singles
        </Button>
        <Button
          type="button"
          name="matchType"
          value="Doubles"
          onClick={(e) => [handleChange(e), setMatchType(true)]}>
          Doubles
        </Button>
      </div>

      <GameInput>
        <GameInput.PlayerForm>
          <GameInput.InputContainer>
            <GameInput.Input
              placeholder="player 1"
              onChange={handleChange}
              name="player1"
              value={matchSettings.player1}>
              Player1
            </GameInput.Input>
            <GameInput.Input
              placeholder="player 2"
              onChange={handleChange}
              name="player2"
              value={matchSettings.player2}>
              Player2
            </GameInput.Input>
          </GameInput.InputContainer>

          {matchType && (
            <GameInput.InputContainer>
              <GameInput.Input
                placeholder="player 3"
                onChange={handleChange}
                name="player3"
                value={matchSettings.player3}>
                Player3
              </GameInput.Input>
              <GameInput.Input
                placeholder="player 4"
                onChange={handleChange}
                name="player4"
                value={matchSettings.player4}>
                Player4
              </GameInput.Input>
            </GameInput.InputContainer>
          )}
        </GameInput.PlayerForm>
      </GameInput>

      <GameInput.PlayerForm>
        <GameInput.InputContainer direction={'row'}>
          <GameInput.Input onClick={handleChange} type="radio" name="tieBreak" value="7 points">
            7 Points
          </GameInput.Input>
          <GameInput.Input onClick={handleChange} type="radio" name="tieBreak" value="10 Points">
            10 Points
          </GameInput.Input>
          }
        </GameInput.InputContainer>
      </GameInput.PlayerForm>

      <div className="settingsButtons">
        <Button onClick={() => handleSubmit(ROUTES.Score)}>Start normal</Button>
        <Button onClick={() => handleSubmit(ROUTES.ScoreAdv)}>Start adv</Button>
      </div>
    </GeneralContainer>
  );
}
