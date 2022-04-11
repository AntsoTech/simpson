import './App.css';
import axios from 'axios';
import React, { useState } from "react";
import Card from './components/Card';

const sampleQuote = 
  {
  quote: "In theory, Communism works! In theory.",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right"
  };

function App() {
  const [quote, setQuote] = useState(sampleQuote);
  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => (response.data))
      // Use this data to update the state
      .then((data) => {
        setQuote(data[0]);
      });
  };
  return (
    <div>
      <Card {...quote} />
      <button type="button" onClick={getQuote}> Nouvelle citation</button>
    </div>
  );
}

export default App;
