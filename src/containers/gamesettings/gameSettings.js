import React, { useState } from 'react';
import { GeneralContainer, Button, GameInput } from '../../components';
import { Link } from 'react-router-dom';

import './style.css';
import * as ROUTES from '../../routes/routes';
import {collection, doc, setDoc} from "firebase/firestore/lite";
import {db} from "../../firebase/config/firebase-config";

export default function GameSettings({ children, ...props }) {
  //in case of any functions insert here or effects here

  //Database variables
  const matchRef = collection(db, "match");

  const [isDouble, setIsDouble] = useState(false);
  const [matchSettings, setMatchSettings] = useState({
    player1: '', //input
    player2: '', //input
    player3: '', //input
    player4: '', //input
    setType: '', //input
    type: '',
    finalScore: '' //score id
  });

  const handleChange = (e) => {
    e.persist();
    setMatchSettings((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value
    }));
  };
  console.log(matchSettings);

 ;

    const saveMatch = async () => {
        const time = new Date.now()
        const emptyMatchRef = doc(matchRef);
        await setDoc(emptyMatchRef, {
            player1: matchSettings.player1, //input
            player2: matchSettings.player2, //input
            player3: matchSettings.player3, //input
            player4: matchSettings.player4, //input
            setType: matchSettings.setType, //input
            startOn: time, //timestamp function
            Timer: "Time of the match",
            type: matchSettings.type,
            finalScore: "another collection databank", //score id
            profilePicUrl: "getProfilePicUrl()",
            timestamp: "serverTimestamp()",})

    }

    const handleSubmit = async () => {
        await saveMatch();
    }

  return (
    <GeneralContainer>
      <div className="settingsbuttons">
        <Button onClick={() => setIsDouble(false)}>Singles</Button>
        <Button onClick={() => setIsDouble(true)}>Doubles</Button>
      </div>

      <GameInput>
        <GameInput.PlayerForm>
          <GameInput.InputContainer>
            <GameInput.Input onChange={handleChange} name="player1" value={matchSettings.player1}>
              Player1
            </GameInput.Input>
            <GameInput.Input onChange={handleChange} name="player2" value={matchSettings.player2}>
              Player2
            </GameInput.Input>
          </GameInput.InputContainer>

          {isDouble && (
            <GameInput.InputContainer>
              <GameInput.Input onChange={handleChange} name="player3" value={matchSettings.player3}>
                Player3
              </GameInput.Input>
              <GameInput.Input onChange={handleChange} name="player4" value={matchSettings.player4}>
                Player4
              </GameInput.Input>
            </GameInput.InputContainer>
          )}
        </GameInput.PlayerForm>
      </GameInput>

      <GameInput.PlayerForm>
        <GameInput.InputContainer direction={'row'}>
          <GameInput.Input type={'radio'} value={matchSettings.setType}>
            7 Points
          </GameInput.Input>
          <GameInput.Input type={'radio'} value={matchSettings.type}>
            10 Points
          </GameInput.Input>
        </GameInput.InputContainer>
      </GameInput.PlayerForm>

      <div className="settingsbuttons">
        <Link to={ROUTES.Score}>
          <Button onSubmit={handleSubmit}>Start normal</Button>
        </Link>
        <Link to={ROUTES.ScoreAdv}>
          <Button>Start adv</Button>
        </Link>
      </div>
    </GeneralContainer>
  );
}
