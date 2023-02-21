import React, { useState } from 'react';
import { Button } from '../../components';
import './pointScore.css';

export default function PointScorerContainer({ match }) {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const
  //gameid as a prop
  //fetch from firestore the game

  // update points array
  // check conditions and if when game ended => create new game id

  //counter function
  console.log('games score', match.games[0].details.player1.score);

  return (
    <div className="scoringContainer">
      <Button.ScoringButton onClick={() => setPlayer1Score(player1Score + 15)}>
        {match.games[0].details.player1.score}
      </Button.ScoringButton>
      <h2 className="VS">VS</h2>
      <Button.ScoringButton onClick={() => setPlayer2Score(player2Score + 15)}>
        {match.games[0].details.player2.score}
      </Button.ScoringButton>
    </div>
  );
}
