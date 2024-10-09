import React from "react";
import Synonyms from "./Synonyms";
import "./KeywordMeaning.css";

export default function KeywordMeaning(props) {
  return (
    <div className="KeywordMeaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="definitionExample">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
