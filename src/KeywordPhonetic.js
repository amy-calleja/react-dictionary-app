import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./KeywordPhonetic.css";

export default function KeywordPhonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="KeywordPhonetic">
      /{props.phonetic.text}
      <div className="audioPlayer">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay={false}
          controls
        />
      </div>
    </div>
  );
}
