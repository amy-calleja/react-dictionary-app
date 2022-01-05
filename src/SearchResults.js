import React from "react";
import KeywordMeaning from "./KeywordMeaning";
import KeywordPhonetic from "./KeywordPhonetic";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <KeywordPhonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <KeywordMeaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
