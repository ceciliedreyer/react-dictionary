import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState();

  function handleSearch(response) {
    setResults(response.data);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "c0f7a728c0575391764t3b111d69od7f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleSearch);
    console.log(apiUrl);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input type="search" onChange={updateWord} />
      </form>
      <Results data={results} />
    </div>
  );
}
