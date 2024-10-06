import { database } from './firebase';
import { ref, set, get } from "firebase/database";


// Function to save data to Firebase
export async function saveToFirebase(data) {
  try {
    const dbRef = ref(database, 'messages/'); // Reference to 'messages' node
    await set(dbRef, {
      message: data,
    });
    console.log('Data saved to Firebase');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Function to fetch data from Firebase
export async function fetchFromFirebase() {
  try {
    const dbRef = ref(database, 'messages/'); // Reference to 'messages' node
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val().message; // Return the message if it exists
    } else {
      return 'No data found';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return 'Error fetching data';
  }
}