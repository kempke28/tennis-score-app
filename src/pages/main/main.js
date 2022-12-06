import React from 'react';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import './styles/style.css';

import * as ROUTES from '../../routes/routes.js';

export default function Main() {
  /*
    const matchRef = collection(db, 'match');
    useEffect(async () => {
        const matchDocs = await getDocs(matchRef);
        const matches = matchDocs.docs.map(matchdoc => ({...matchdoc.data(), id: matchdoc.id}))
        console.log(matches);

        const oneMatchRef = doc(matchRef, "VFObHCv0fUynQV7BgGH9");
        const oneMatchDoc = await getDoc(oneMatchRef);
        const oneMatch = {...oneMatchDoc.data(), id: oneMatchDoc.id};
        console.log(oneMatch)
        const newOneMatch = {...oneMatch, player1: "martin"};
        console.log(newOneMatch);

        const result = await setDoc(oneMatchRef, newOneMatch);
        console.log(result);

        const emptyMatchRef = doc(matchRef);
        await setDoc(emptyMatchRef, {
            player1: "john", //input
            player2: "mike", //input
            player3: "", //input
            player4: "", //input
            setType: "3", //input
            startOn: "timestamp", //timestamp function
            Timer: "ime of the match",
            type: "singles",
            finalScore: "Number", //score id
            profilePicUrl: "getProfilePicUrl()",
            timestamp: "serverTimestamp()",})
    }, []);
*/

  return (
    <div className="buttonContainer">
      <div className="mainButtons">
        <Link to={ROUTES.Score}>
          <Button>Continue Match</Button>
        </Link>
      </div>
      <div className="mainButtons">
        <Link to={ROUTES.SelectGame}>
          <Button>New Match</Button>
        </Link>
      </div>
      <div className="mainButtons">
        <Link to={ROUTES.History}>
          <Button>Match History</Button>
        </Link>
      </div>
    </div>
  );
}
