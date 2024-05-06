import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);

  function updateWord(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`hello ${word}`);
  }

  return (
    <form onSubmit={search}>
      <input type="search" onChange={updateWord} />
    </form>
  );
}
