import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const emojiDictionary = {
    "đ": "Name: Grinning",
    "đ": "Name: Smiley",
    "đ": "Name: Smile",
    "đ": "Name: Grin",
    "đ": "Name: Laughing",
    "đ¤Ŗ": "Rolling on the floor laughing",
    "đ": "Joy",
    "đ": "Slightly smiling face",
    "đ": "Upside down face",
    "đ": "Wink",
    "đ": "Blush",
    "đ": "Innocent",
    "đ": "Heart eyes",
    "đ": "Kissing heart",
    "đ": "Kissing closed eyes",
    "đ": "Kissing smiling eyes",
    "đ": "Yum",
    "đ": "Stuck out tongue",
    "đ": "Stuck out tongue winking eye",
    "đ¤": "Thinking face",
    "đī¸": "Neutral face",
    "đ": "Expressionless",
    "đ¤Ģ": "Shushing face",
    "đ¤": "Hugging face",
    "đ¤": "Zipper mouth face",
    "đ¤": "Money mouth face",
    "đļ": "No mouth",
    "đ": "Smirk",
    "đ": "Unamused face",
    "đ": "Face with rolling eyes",
    "đŦ": "Grimacing face",
    "đ¤Ĩ": "Lying face",
    "đ": "Relieved face",
    "đ": "Pensive face",
    "đ´": "Sleeping face",
    "đĒ": "Sleepy face",
    "đ¤¤": "Drooling face",
    "đˇ": "Face with medical mask",
    "đ¤": "Face with thermometer",
    "đ¤": "Face with head bandage",
    "đ¤ĸ": "Nauseated Face",
    "đ¤Ž": "Face vomiting",
    "đ¤§": "Sneezing face",
    "đĨĩ": "Hot face",
    "đĨļ": "Cold face",
    "đĨ´": "Woozy face",
    "đĩ": "Face with crossed-out eyes",
    "đ¤¯": "Exploding head",
    "đ¤ ": "Cowboy hat face",
    "đĨŗ": "Partying face",
    "đĨ¸": "Disguised face",
    "đ": "Smiling face with sunglasses",
    "đ¤": "Nerd face",
    "đ§": "Face with Monocle",
    "đ": "Confused face",
    "âšī¸": "Frowning face",
    "đŽ": "Face with Open mouth",
    "đ¯": "Hushed face",
    "đ˛": "Astonished face",
  };
  const emojiMeaningDictionary = {
    "đ": "It conveys cheerfulness and joy towards something positive",
    "đ": "Smiley emoji denotes happiness and positive feelings",
    "đ": "The smile emoji depicts a personâs happiness when sending a greeting text or simply used to compliment something or the other ",
    "đ": "The emoji depicts laughter often used to react towards something hilarious",
  };

  var [emojiName, setEmojiName] = useState("");
  var [emojiMeaning, setEmojiMeaning] = useState("");
  var emojiIcon;
  function onChangeHandler(event) {
    var emoji = event.target.value;
    emojiIcon = emoji;
    emojiName = emojiDictionary[emoji];
    if (emojiName === undefined) {
      setEmojiName("unable to find...");
      console.log(emoji);
      console.log(emojiName);
      // setEmojiName("");
      // setEmojiMeaning("");
    } else if (emoji == "") {
      // setEmojiName("_");
      // setEmojiMeaning("");
    } else {
      setEmojiName(emojiName);
      setEmojiMeaning(emojiMeaningDictionary[emoji]);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Inside Outt</h1>
        <p>Enter your favorite emoji and find out what it means</p>
        <input
          type="text"
          onChange={onChangeHandler}
          placeholder="Enter your favorite emoji here"
        />
        <h3>{emojiIcon}</h3>
        <h4>{emojiName}</h4>
        <p>{emojiMeaning}</p>
      </div>
    </div>
  );
}

export default App;
