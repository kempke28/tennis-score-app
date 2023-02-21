import { collection, getDocs, doc, setDoc, getDoc, query, where } from 'firebase/firestore/lite';
import { db } from '../config/firebase-config';

// Saves a new collection to Cloud Firestore.
export async function createMatchCollection(matchSettings) {
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
  try {
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
  } catch (error) {
    alert('cannot create set');
    return null;
  }
  return newSetCollection.id;
}

export async function createGamesCollection(setId) {
  const gameCollection = collection(db, 'games');
  const newGameCollection = doc(gameCollection);
  try {
    await setDoc(newGameCollection, {
      setId: setId,
      gameNumber: 0,
      details: {
        player1: {
          score: 0,
          points: []
        },
        player2: {
          score: 0,
          points: []
        }
      }
    });
  } catch (error) {
    alert('cannot create game');
  }
  return newGameCollection.id
}

// Get a list of matches from your database



export async function getMatchById(matchId) {
  const matchRef = collection(db, 'match');
  const matchDocRef = doc(matchRef, matchId);
  const matchSnapshot = await getDoc(matchDocRef);
  const matchDoc = { ...matchSnapshot.data(), id: matchSnapshot.id };
  return matchDoc;
}


export async function getSetsById(setId) {
    const setRef = collection(db, 'sets');
    const setDocRef = doc(setRef, setId);
    const setSnapShot = await getDoc(setDocRef);
    const setDoc = { ...setSnapShot.data(), id: setSnapShot.id };
    return setDoc;
}

export async function getMatchDetailsById(matchId) {
  const matchDoc = await getMatchById(matchId);
  const setRef = collection(db, 'sets');
  const setsQuery = query(setRef, where('matchId', '==', matchId));
  const setsSnapshot = await getDocs(setsQuery);
  const setsDocs = setsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
  }))
  const gameRef = collection(db, 'games');
  const gamesQuery = query(gameRef, where('setId', 'in', setsDocs.map((doc) => (doc.id))));
  const gamesSnapshot = await getDocs(gamesQuery);
  const gamesDocs = gamesSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
  console.log('getMatchDetails', matchDoc);
  return {
    ...matchDoc,
    sets: setsDocs,
    games: gamesDocs
  };
}



//update score array function
// export async function updateMatchGameDetails() {
//     const gameCollection = collection(db, 'games', doc.id);
//     const gameUpdate = await updateDoc(gameCollection, {
//         "details.player1.score": "depends of array",
//         "details.player1.points": [],
//         "details.player2.score": "depends of array",
//         "details.player2.points": [],
//         "gameNumber": 0,
//     });
//     return gameUpdate;
// }
