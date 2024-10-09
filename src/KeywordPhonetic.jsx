import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./KeywordPhonetic.css";

export default function KeywordPhonetic(props) {
  return (
    <div className="KeywordPhonetic">
      /{props.phonetic.text}/
      <br />{" "}
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
