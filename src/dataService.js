import { database } from './firebase';
import { ref, set, get, onValue } from "firebase/database";
// REF function to get the firebase path, SET to add data to specific reference
// GET Retrive data ONVALUE to lister for changes in real-time 


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

  // Function to fetch random animal from Firebase
  export const fetchRandomAnimal = (setAnimal) => {
    const animalsRef = ref(database, 'animals'); // Correct Firebase path with the ref function
  
    onValue(animalsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const keys = Object.keys(data);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        setAnimal(data[randomKey]); // No .name, since it's just the value
      }
    });
  };