import logo from './logo.svg';
import './App.css';
import { fetchFromFirebase, saveToFirebase } from './dataService';

import React, { useState, useEffect } from 'react';

function App() {

  const [firebaseData, setFirebaseData] = useState('');
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    async function getFirebaseData() {
      const data = await fetchFromFirebase();
      setFirebaseData(data);
    }

    getFirebaseData();
  }, []);

    // Handle saving data to Firebase
    const handleSave = async () => {
      await saveToFirebase(inputData);
      const updatedData = await fetchFromFirebase();
      setFirebaseData(updatedData);
    };

    return (
      <div className="App">
        <header className="App-header">
          <img 
          src={logo} alt="logo" width={400} ></img>
          <h1>Firebase Data</h1>
          <p>Saved message: {firebaseData}</p>
  
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter message"
          />
          <button onClick={handleSave}>Save to Firebase</button>
        </header>
      </div>
    );
  }

export default App;
