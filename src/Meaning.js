import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.data.partOfSpeech}</h4>
      <p>{props.data.definition}</p>
      <Synonyms data={props.data.synonyms} />
    </div>
  );
}
