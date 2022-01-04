import React from "react";
import KeywordMeaning from "./KeywordMeaning";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <KeywordMeaning meaning={meaning} />
            </div>
          );

          //meaning.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
