import React from 'react';
import { Button } from '../../components';
import HeaderContainer from '../../containers/header/header';
import TableScoreContainer from '../../containers/scoreTable/scoreTable';
import PointScorerContainer from '../../containers/pointscorer/pointScore';


import './styles/style.css';
import {useParams} from "react-router-dom";
import {getMatchById} from "../../firebase/service/matches.service";

export default function Score() {
    const params = useParams()
    console.log(params.id)

    const matchIds = getMatchById();

  return (
    //points table
    //score Pointer
    //interactive Buttons
    <div className="container">
      <HeaderContainer />
      <TableScoreContainer matchId={ params.id }/>
      <PointScorerContainer />
      <div className="buttomButtons">
        <Button>Undo</Button>
        <Button>Back</Button>
        <Button>Erase Game</Button>
      </div>
    </div>
  );
}
