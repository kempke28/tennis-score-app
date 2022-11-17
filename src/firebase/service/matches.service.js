import {collection, getDocs, addDoc, doc, setDoc} from "firebase/firestore/lite";
import { db } from '../config/firebase-config';


// Saves a new collection to Cloud Firestore.
export async function saveMatches() {
    // Add a new message entry to the Firebase database.
   const matchRef = collection(db, "match");
   const emptyMatchRef = doc(matchRef);
   await setDoc(emptyMatchRef, {
       player1: "input from form",
       player2: "input from form", //input
       player3: "input from form", //input
       player4: "input from form", //input
       setType: "input from form", //input
       startOn: "timestamp", //timestamp function
       Timer: "ime of the match",
       type: "input from form",
       finalScore: "another collection databank", //score id
       profilePicUrl: "getProfilePicUrl()",
       timestamp: "serverTimestamp()",})
}

//get matches

// Get a list of matches from your database

export async function getMatches() {
    const matchReq = collection(db, 'Matches');
    const matchSnapshot = await getDocs(matchReq);
    const matchList = matchSnapshot.docs.map(match => match.data(),);
    return matchList;
}