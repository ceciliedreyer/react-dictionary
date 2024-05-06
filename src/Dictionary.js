import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);

  function handleSearch(response) {
    console.log(response.data);
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
    <form onSubmit={search}>
      <input type="search" onChange={updateWord} />
    </form>
  );
}
