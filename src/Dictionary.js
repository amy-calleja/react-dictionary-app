import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`searching..${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    console.log(event);
  }

  return (
    <div className="Dictionary">
      <h3>What would you like to look up?</h3>
      <form onSubmit={handleSearch}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
