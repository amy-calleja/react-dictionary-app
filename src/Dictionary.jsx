import axios from "axios";
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleSearchResponse(response) {
    setResults(response.data[0]);
  }

  function handleSearchPhotos(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSearchResponse);

    let photosApiKey = "499f11ecbcdob7ab1a500t4761a0c233";
    let apiPhotosUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;
    // let headers = { Authorization: `Bearer ${photosApiKey}` };
    axios.get(apiPhotosUrl).then(handleSearchPhotos);
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
        <div className="suggestedWords">example: wine, happiness, yoga...</div>
        <br />
        <SearchResults results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading . . .";
  }
}
