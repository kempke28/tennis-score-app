import React, { useEffect, useState } from 'react';
import { Button } from '../../components';
import HeaderContainer from '../../containers/header/header';
import TableScoreContainer from '../../containers/scoreTable/scoreTable';
import PointScorerContainer from '../../containers/pointScore/pointScore';

import './score.css';
import { useParams } from 'react-router-dom';
import { getMatchById } from '../../firebase/service/matches.service';

export default function Score() {
  const [match, setMatch] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const matchResponse = await getMatchById(params.id);
      console.log(matchResponse);
      setMatch(matchResponse);
    };
    if (match?.id !== params.id) {
      fetchData();
    }
  }, [params.id, match?.id]);

  if (!match) {
    return <div>...loading</div>;
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
