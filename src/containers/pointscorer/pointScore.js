import React, { useState } from 'react';
import { Button } from '../../components';
import './style.css';

export default function PointScorerContainer() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);


  //create game collection here, once the first point is clicked and made



  //algorithm counting
  function score() {

      //
  }

  return (
    <div className="scoringContainer">
      <Button.ScoringButton onClick={() => setPlayer1Score(player1Score + 15)}>
        {player1Score}
      </Button.ScoringButton>
      <h2 className="VS">VS</h2>
      <Button.ScoringButton onClick={() => setPlayer2Score(player2Score + 15)}>
        {player2Score}
      </Button.ScoringButton>
    </div>
  );
}
