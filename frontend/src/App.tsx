import { useState } from 'react';
import './App.css';

export default function App() {
  const [display, setDisplay] = useState('Nothing');

  const createURL = async () => {
    try {
      const response = await fetch('http://localhost:8080/create', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: 'value',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setDisplay(data.Received); // Accessing the 'Received' property from the response
    } catch (error) {
      console.error('Error:', error);
      setDisplay('Failed to fetch data');
    }
  };

  return (
    <div>
      {display}
      <button onClick={createURL}>Go</button>
    </div>
  );
}
