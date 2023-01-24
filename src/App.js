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
  const emojiMeaningDictionary = {
    "😀": "It conveys cheerfulness and joy towards something positive",
    "😃": "Smiley emoji denotes happiness and positive feelings",
    "😄": "The smile emoji depicts a person’s happiness when sending a greeting text or simply used to compliment something or the other ",
    "😁": "The emoji depicts laughter often used to react towards something hilarious"
  };

  var [ emojiName, setEmojiName ] = useState("");
  var [ emojiMeaning, setEmojiMeaning ] = useState("");
  function onChangeHandler(event) {
    var emoji = event.target.value;
    emojiName = emojiDictionary[emoji];
    if(emojiName===undefined){
      setEmojiName("unable to find...")
    } else {
      setEmojiName(emojiName);
      setEmojiMeaning(emojiMeaningDictionary[emoji]);
    }
  }

  return (
    <div className="App">
      <div className='container'>
      <h1>Inside Outt</h1>
      <p>Enter your favorite emoji and find out what it means</p>
      <input type="text" onChange={onChangeHandler} placeholder='Enter your favorite emoji here'/>
      <h4>{emojiName}</h4>
      <p>{emojiMeaning}</p>
      </div>
    </div>
  );
}

export default App;
