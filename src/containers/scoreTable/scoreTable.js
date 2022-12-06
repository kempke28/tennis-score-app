import React, {useState} from 'react';
import { TableScore } from '../../components';
import { getMatches } from '../../firebase/service/matches.service';
import './style.css';

export default function TableScoreContainer({matchId}) {
  //import data from firebase..

  function gameStats() {


    console.log("gameStats ", getMatches().then((response) => response[1]));
    return getMatches().then((response) => response[1]);
  }

  // function extractGame(match) {
  //     console.log("extractPoints ", typeof match);
  //     console.log("player1 ", match.player1)
  // }

  // async function getGame() {
  //     let game = await gameStats();
  //     // extractGame(game);
  //     console.log("game ", typeof game.player1);
  //     return game.player1;
  // }
  //
  //
  //      const [game, setGame] = React.useState([]);
  //       React.useEffect(async () => {
  //           const response = await gameStats();
  //           setGame(response.data.response);
  //       }, []);


    // useEffect(() => {
    //     async function fetchData() {
    //         // You can await here
    //         const response = await getMatches(someId);
    //         // ...
    //     }
    //     fetchData();
    // },); // Or [] if effect doesn't need props or state

  return (
    <TableScore>
      <TableScore.TableBody>
        <TableScore.TableRow>
          <TableScore.TableHead value={tableStats.player1}>1</TableScore.TableHead>
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
