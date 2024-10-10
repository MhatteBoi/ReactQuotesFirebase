import logo from './logo.svg';
import './App.css';
import { fetchFromFirebase, saveToFirebase, fetchRandomAnimal } from './dataService';
import Sidebar from './Sidebar'

import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import { Database } from 'firebase/database';

function App() {
  // Firebase data retrieved from the database
  const [firebaseData, setFirebaseData] = useState('');

  // User input to be saved to Firebase
  const [inputData, setInputData] = useState('');

  // History of previous user inputs (limited to 10 items)
  const [history, setHistory] = useState([]);

  const [animal, setAnimal] = useState('');

  // Load data from Firebase on component mount
  useEffect(() => {
    async function getFirebaseData() {
      const data = await fetchFromFirebase();
      setFirebaseData(data);
    }

    getFirebaseData();
  }, []);

  // Handle saving input to Firebase and updating history
  const handleSave = async () => {
    if (inputData.trim() === '') return;

    // Save input to Firebase
    await saveToFirebase(inputData);

    // Fetch the updated saved message from Firebase
    const updatedFirebaseData = await fetchFromFirebase();
    setFirebaseData(updatedFirebaseData);

    // Update history with new input (limit to 10 items)
    setHistory((prevHistory) => {
      const updatedHistory = [inputData, ...prevHistory];
      return updatedHistory.slice(0, 10);
    });

    setInputData('');  // Clear input after saving
  }

  const handleFetchRandomAnimal = () => {
    fetchRandomAnimal(setAnimal);
  };

  // Show the app
  return (
    <div className="App h-screen flex flex-col align-center content-center text-center">
      <header className="App-header ml-32 ">
        <img
          src={logo} alt="logo" width={400}
        ></img>
        <h1 className="bg-green-500
        rounded-md px-5 py-2">Firebase Data</h1>
        <p>Saved message: {firebaseData}</p>

        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter message"
          className='text-black my-3'
        />
        <button onClick={handleSave} className='bg-blue-500 hover:bg-blue-400 text-white  border-blue-700 hover:border-blue-500
          font-bold py-2 px-4 border-b-4 rounded'>Save to Firebase</button>

        {/* Sidebar Component */}
        <Sidebar history={history} />

        <div className="mt-10">
          <button
            onClick={handleFetchRandomAnimal}
            className="bg-yellow-500 hover:bg-yellow-400 text-white border-yellow-700 hover:border-yellow-500 font-bold py-2 px-4 border-b-4 rounded"
          >
            Show Random Animal
          </button>
          <p>Random Animal: {animal}</p>
        </div>
      </header>

    </div>
  );
}

export default App;
