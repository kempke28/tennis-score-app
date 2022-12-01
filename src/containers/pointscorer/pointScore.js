import React from 'react';
import { Button, GeneralContainer } from '../../components';
import './style.css';

export default function PointScorerContainer({ children }) {
  return (
    //import data from firebase..
    <div className="scoringContainer">
      <Button.ScoringButton>15</Button.ScoringButton>
      <h2 className="VS">VS</h2>
      <Button.ScoringButton>30</Button.ScoringButton>
    </div>
  );
}
