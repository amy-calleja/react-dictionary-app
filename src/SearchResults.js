import React from "react";
import KeywordMeaning from "./KeywordMeaning";
import KeywordPhonetic from "./KeywordPhonetic";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <KeywordPhonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <KeywordMeaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
