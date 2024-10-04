import { database } from './firebase';
import { ref, set, get } from "firebase/database";


// Function to save data to Firebase
export function saveToFirebase(data) {
    const dbRef = ref(database, 'messages/');
    return set(dbRef, {
      message: data
    });
  }

  // Function to fetch data from Firebase
export async function fetchFromFirebase() {
    const dbRef = ref(database, 'messages/');
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val().message;
    } else {
      return 'No data found';
    }
  }