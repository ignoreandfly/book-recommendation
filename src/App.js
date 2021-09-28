import "./styles.css";
import { useState } from "react";
var bookDatabase = {
  Philosophy: [
    { name: "Thus Spoke Zarathustra", rating: "5" },
    { name: "Critique of Pure Reason", rating: "4" },
    { name: "Being and Nothingness", rating: "5" }
  ],
  Psychology: [
    { name: "The Man Who Mistook His Wife For a Hat", rating: "5" },
    { name: "Dreams and Reflection", rating: "5" },
    { name: "Man's Search For Meaning", rating: "5" }
  ],
  Fiction: [
    { name: "1984", rating: "4" },
    { name: "Animal Farm", rating: "5" },
    { name: "Life Over Two Beers", rating: "2" }
  ]
};

export default function App() {
  var [genre, selectedgenre] = useState("Philosophy");
  function ClickHandler(item) {
    selectedgenre(item);
  }
  return (
    <div className="App">
      <h1> Book Recommendation| Assignment for neoG camp </h1>
      <h2> Select a genre to view recommendation </h2>
      <div>
        {Object.keys(bookDatabase).map((genre) => (
          <button onClick={() => ClickHandler(genre)}>{genre} </button>
        ))}
      </div>
      <hr />

      <div>
        {bookDatabase[genre].map((book) => (
          <div>
            <div>{book.name}</div>
            <div> Rating: {book.rating} </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
