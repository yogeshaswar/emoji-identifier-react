import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const emojiDictionary = {
    "😀": "Name: Grinning",
    "😃": "Name: Smiley",
    "😄": "Name: Smile",
    "😁": "Name: Grin",
    "😆": "Name: Laughing"
  };

  var [ emojiName, setEmojiName ] = useState("");

  function onChangeHandler(event) {
    var emoji = event.target.value;
    emojiName = emojiDictionary[emoji];
    setEmojiName(emojiName);
  }

  return (
    <div className="App">
      <h1>Emoji Identifier</h1>
      <input type="text" onChange={onChangeHandler} placeholder='Enter your favorite emoji here'/>
      <h4>{emojiName}</h4>
    </div>
  );
}

export default App;
