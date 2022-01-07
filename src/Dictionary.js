import axios from "axios";
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSearchResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSearchResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="subtitle">What would you like to look up?</div>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <button value="submit">Search</button>
        </form>
        <div className="suggestedWords">
          example: wine, kitten, happy, yoga...
        </div>
        <br />
        <SearchResults results={results} />
      </div>
    );
  } else {
    load();
    return "Loading . . .";
  }
}
