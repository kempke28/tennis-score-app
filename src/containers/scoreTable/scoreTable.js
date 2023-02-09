import React from 'react';
import { TableScore } from '../../components';
// import { getMatches } from '../../firebase/service/matches.service';
import './style.css';

export default function TableScoreContainer({ match }) {
  return (
    <TableScore>
      <TableScore.TableBody>
        <TableScore.TableRow>
          <TableScore.TableHead>{match.player1}</TableScore.TableHead>
          <TableScore.TableData>1</TableScore.TableData>
          <TableScore.TableData>2</TableScore.TableData>
          <TableScore.TableData>3</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
        </TableScore.TableRow>
      </TableScore.TableBody>
      <TableScore.TableBody>
        <TableScore.TableRow>
          <TableScore.TableHead>{match.player2}</TableScore.TableHead>
          <TableScore.TableData>1</TableScore.TableData>
          <TableScore.TableData>2</TableScore.TableData>
          <TableScore.TableData>3</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
        </TableScore.TableRow>
      </TableScore.TableBody>
    </TableScore>
  );
}