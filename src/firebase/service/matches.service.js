import { collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore/lite';
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

export async function createSetsCollection(matchId) {
  const SetCollection = collection(db, 'sets');
  const newSetCollection = doc(SetCollection);
  await setDoc(newSetCollection, {
    matchId: matchId,
    setNumber: 0,
    details: {
      player1: {
        score: 0,
        games: []
      },
      player2: {
        score: 0,
        games: []
      }
    }
  });
}

// Get a list of matches from your database

export async function getMatches() {
  const matchReq = collection(db, 'Matches');
  const matchSnapshot = await getDocs(matchReq);
  const matchList = matchSnapshot.docs.map((match) => match.data());
  return matchList;
}

export async function getMatchById(matchId) {
  const matchRef = collection(db, 'match');
  const matchDocRef = doc(matchRef, matchId);
  const matchSnapshot = await getDoc(matchDocRef);
  const matchDoc = { ...matchSnapshot.data(), id: matchSnapshot.id };
  return matchDoc;
}
