import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const emojiDictionary = {
    "😀": "Name: Grinning",
    "😃": "Name: Smiley",
    "😄": "Name: Smile",
    "😁": "Name: Grin",
    "😆": "Name: Laughing",
    "🤣": "Rolling on the floor laughing",
    "😂": "Joy",
    "🙂": "Slightly smiling face",
    "🙃": "Upside down face",
    "😉": "Wink",
    "😊": "Blush",
    "😇": "Innocent",
    "😍": "Heart eyes",
    "😘": "Kissing heart",
    "😚": "Kissing closed eyes",
    "😙": "Kissing smiling eyes",
    "😋": "Yum",
    "😛": "Stuck out tongue",
    "😜": "Stuck out tongue winking eye",
    "🤔": "Thinking face",
    "😐️": "Neutral face",
    "😑": "Expressionless",
    "🤫": "Shushing face",
    "🤗": "Hugging face",
    "🤐": "Zipper mouth face",
    "🤑": "Money mouth face",
    "😶": "No mouth",
    "😏": "Smirk",
    "😒": "Unamused face",
    "🙄": "Face with rolling eyes",
    "😬": "Grimacing face",
    "🤥": "Lying face",
    "😌": "Relieved face",
    "😔": "Pensive face",
    "😴": "Sleeping face",
    "😪": "Sleepy face",
    "🤤": "Drooling face",
    "😷": "Face with medical mask",
    "🤒": "Face with thermometer",
    "🤕": "Face with head bandage",
    "🤢": "Nauseated Face",
    "🤮": "Face vomiting",
    "🤧": "Sneezing face",
    "🥵": "Hot face",
    "🥶": "Cold face",
    "🥴": "Woozy face",
    "😵": "Face with crossed-out eyes",
    "🤯": "Exploding head",
    "🤠": "Cowboy hat face",
    "🥳": "Partying face",
    "🥸": "Disguised face",
    "😎": "Smiling face with sunglasses",
    "🤓": "Nerd face",
    "🧐": "Face with Monocle",
    "😕": "Confused face",
    "☹️": "Frowning face",
    "😮": "Face with Open mouth",
    "😯": "Hushed face",
    "😲": "Astonished face",
  };
  const emojiMeaningDictionary = {
    "😀": "It conveys cheerfulness and joy towards something positive",
    "😃": "Smiley emoji denotes happiness and positive feelings",
    "😄": "The smile emoji depicts a person’s happiness when sending a greeting text or simply used to compliment something or the other ",
    "😁": "The emoji depicts laughter often used to react towards something hilarious",
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
