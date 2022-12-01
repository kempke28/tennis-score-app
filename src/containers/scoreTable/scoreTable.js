import React from 'react';
import { TableScore } from '../../components';
import {getMatches} from "../../firebase/service/matches.service";
import './style.css';

export default function TableScoreContainer() {
  //import data from firebase..


    console.log(
        'abads ',
        getMatches().then((response) => console.log(response[1]))
    );

    function gameStats() {
        let player;
        getMatches().then((response) => {
            player = response[1];
        });
        console.log(
            'texto ',
            getMatches().then((response) => response[1])
        );
        console.log(player);
        return player;
    }

  return (
    <TableScore>
      <TableScore.TableBody>
        <TableScore.TableRow>
          <TableScore.TableHead>player 1</TableScore.TableHead>
          <TableScore.TableData>1</TableScore.TableData>
          <TableScore.TableData>2</TableScore.TableData>
          <TableScore.TableData>3</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
          <TableScore.TableData>4</TableScore.TableData>
        </TableScore.TableRow>
      </TableScore.TableBody>
      <TableScore.TableBody>
        <TableScore.TableRow>
          <TableScore.TableHead>team2</TableScore.TableHead>
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
