import React from 'react';
import { TableScore } from '../../components';
// import { getMatches } from '../../firebase/service/matches.service';
import './scoreTable.css';

export default function TableScoreContainer({ match }) {

    console.log(match.sets[0].details.player1.score);

  return (
    <TableScore>
      <TableScore.TableBody>
        <TableScore.TableRow>
          <TableScore.TableHead>{match.player1}</TableScore.TableHead>
          <TableScore.TableData>{match.sets[0].details.player1.score}</TableScore.TableData>
          <TableScore.TableData>0</TableScore.TableData>
          <TableScore.TableData>0</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
        </TableScore.TableRow>
      </TableScore.TableBody>
      <TableScore.TableBody>
        <TableScore.TableRow>
          <TableScore.TableHead>{match.player2}</TableScore.TableHead>
          <TableScore.TableData>{match.sets[0].details.player2.score}</TableScore.TableData>
          <TableScore.TableData>0</TableScore.TableData>
          <TableScore.TableData>0</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
        </TableScore.TableRow>
      </TableScore.TableBody>
    </TableScore>
  );
}
