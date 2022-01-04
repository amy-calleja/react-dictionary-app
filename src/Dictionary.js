import axios from "axios";
import React, { useState } from "react";
import SearchResults from "./SearchResults";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleSearchResponse(response) {
    setResults(response.data[0]);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSearchResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="subtitle">What would you like to look up?</div>
      <form onSubmit={handleSearch}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <button value="submit">Search</button>
      </form>
      <br />
      <SearchResults results={results} />
    </div>
  );
}
