import React, { useEffect, useState } from 'react';
import { Button } from '../../components';
import HeaderContainer from '../../containers/header/header';
import TableScoreContainer from '../../containers/scoreTable/scoreTable';
import PointScorerContainer from '../../containers/pointScore/pointScore';

import './score.css';
import { useParams } from 'react-router-dom';
import { getMatchDetailsById } from '../../firebase/service/matches.service';

export default function Score() {
  const [match, setMatch] = useState(null);
  const [setScore, setSetScore] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const matchDetailsData = await getMatchDetailsById(params.id);
      //const setDetails = await getSetsById(setId);
      console.log(matchDetailsData);
      setMatch(matchDetailsData);
    };
    if (match?.id !== params.id) {
      fetchData();
    }
  }, [params.id, match?.id]);

  if (!match) {
    return <div className="loadingCircle">...loading</div>;
  }

  return (
    //points table
    //score Pointer
    //interactive Buttons
    <div className="container">
      <HeaderContainer />
      <TableScoreContainer match={match} />
      <PointScorerContainer />
      <div className="buttomButtons">
        <Button>Undo</Button>
        <Button>Back</Button>
        <Button>Erase Game</Button>
      </div>
    </div>
  );
}
