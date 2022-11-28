import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import { db } from '../config/firebase-config';
import * as ROUTES from '../../routes/routes';

// Saves a new collection to Cloud Firestore.
export async function saveMatches(matchSettings) {
  const time = new Date();
  const matchRef = collection(db, 'match');
  const emptyMatchRef = doc(matchRef);
  try {
    await setDoc(emptyMatchRef, {
      matchType: matchSettings.matchType,
      player1: matchSettings.player1, //input
      player2: matchSettings.player2, //input
      player3: matchSettings.player3, //input
      player4: matchSettings.player4, //input
      startOn: time, //timestamp function
      Timer: 'Time of the match',
      tieBreak: matchSettings.tieBreak,
      finalScore: [], //score id
      profilePicUrl: 'getProfilePicUrl()'
    });
  } catch (error) {
    alert('data could not be saved');

    return false
    //or any other message
  }
  return true
}

// Get a list of matches from your database

export async function getMatches() {
  const matchReq = collection(db, 'Matches');
  const matchSnapshot = await getDocs(matchReq);
  const matchList = matchSnapshot.docs.map((match) => match.data());
  return matchList;
}
