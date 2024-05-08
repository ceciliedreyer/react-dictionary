import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState();
  const [photos, setPhotos] = useState();

  function handleSearch(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handlePexels(response) {
    console.log(response.data);
    setPhotos(response.data);
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

    let pexelsApiKey =
      "AasuWBtNq0dqtySEV6vgIZuVIC2FsUzeOTUbve4S8DF2dujsoiIimGdt";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers = { Authorization: ` ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexels);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Which word do you want to search for?</h1>
        <form onSubmit={search}>
          <input type="search" onChange={updateWord} />
        </form>
      </section>
      <Results data={results} />
      <Photos data={photos} />
    </div>
  );
}
