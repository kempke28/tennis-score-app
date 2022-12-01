import React from 'react';
import { Button } from '../../components';
import HeaderContainer from '../../containers/header/header';
import TableScoreContainer from '../../containers/scoreTable/scoreTable';
import PointScorerContainer from '../../containers/pointscorer/pointScore';

import "./styles/style.css"

export default function Score() {
  return (
    //points table
    //score Pointer
    //interactive Buttons
    <div className="container">
      <HeaderContainer/>
      <TableScoreContainer />
      <PointScorerContainer />
      <div className="buttomButtons">
        <Button>Undo</Button>
        <Button>Back</Button>
        <Button>Erase Game</Button>
      </div>
    </div>
  );
}
