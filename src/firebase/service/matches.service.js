import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import { db } from '../config/firebase-config';

// Saves a new collection to Cloud Firestore.
export async function saveMatches(matchSettings) {
  const time = new Date();
  const matchRef = collection(db, 'match');
  const newMatchRef = doc(matchRef);
  try {
    await setDoc(newMatchRef, {
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

    return null;
    //or any other message
  }
  return newMatchRef.id;
}

// Get a list of matches from your database

export async function getMatches() {
  const matchReq = collection(db, 'match');
  const matchSnapshot = await getDocs(matchReq);
  const matchList = matchSnapshot.docs.map((match) => match.data());
  return matchList;
}

export async function getMatchById() {
  const matchRef = collection(db, 'match');
  const matchSnapshot = await getDocs(matchRef);
  const matchListId = matchSnapshot.docs.map((match) => console.log (match.id));
  return matchListId;
}
