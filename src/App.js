import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const emojiDictionary = {
    "😀": "Grinning",
    "😃": "Smiley",
    "😄": "Smile",
    "😁": "Grin",
    "😆": "Laughing"
  };
  const emojiMeaningDictionary = {
    "😀": "Meaning: It conveys cheerfulness and joy towards something positive",
    "😃": "Meaning: Smiley emoji denotes happiness and positive feelings",
    "😄": "Meaning: The smile emoji depicts a person’s happiness when sending a greeting text or simply used to compliment something or the other ",
    "😁": "Meaning: The emoji depicts laughter often used to react towards something hilarious"
  };

  var [ emojiName, setEmojiName ] = useState("");
  var [ emojiMeaning, setEmojiMeaning ] = useState("");
  function onChangeHandler(event) {
    var emoji = event.target.value;
    emojiName = emojiDictionary[emoji];
    setEmojiName(emojiName);
    setEmojiMeaning(emojiMeaningDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Identifier</h1>
      <input type="text" onChange={onChangeHandler} placeholder='Enter your favorite emoji here'/>
      <h4>Name: {emojiName}</h4>
      <p>{emojiMeaning}</p>
    </div>
  );
}

export default App;
