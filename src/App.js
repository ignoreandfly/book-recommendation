import "./styles.css";
import { useState } from "react";
var bookDatabase = {
  Philosophy: [
    {
      name: "Thus Spoke Zarathustra",
      rating: "5",
      description:
        "The protagonist is nominally the historical Zarathustra, but, besides a handful of sentences, Nietzsche is not particularly concerned with any resemblance. Much of the book purports to be what Zarathustra said, and it repeats the refrain, Thus spoke Zarathustra."
    },
    {
      name: "Critique of Pure Reason",
      rating: "4",
      description:
        " The Critique of Pure Reason brings together two opposing schools of philosophy: rationalism, which grounds all our knowledge in reason, and empiricism, which traces all our knowledge to experience. Kant's transcendental idealism indicates a third way that goes far beyond these alternatives."
    },
    {
      name: "Being and Nothingness",
      rating: "5",
      description:
        "Jean-Paul Sartre, the seminal smarty-pants of mid-century thinking, launched the existentialist fleet with the publication of Being and Nothingness in 1943. Though the book is thick, dense, and unfriendly to careless readers, it is indispensable to those interested in the philosophy of consciousness and free will. "
    }
  ],
  Psychology: [
    {
      name: "The Man Who Mistook His Wife For a Hat",
      rating: "5",
      description:
        "The Man Who Mistook His Wife for a Hat and Other Clinical Tales is a 1985 book by neurologist Oliver Sacks describing the case histories of some of his patients. Sacks chose the title of the book from the case study of one of his patients who has visual agnosia,a neurological condition that leaves him unable to recognize faces and objects. The book became the basis of an opera of the same name by Michael Nyman, which premiered in 1986."
    },
    {
      name: "Dreams and Reflection",
      rating: "5",
      description:
        "In the spring of 1957, when he was eighty-one years old, Carl Gustav Jung undertook the telling of his life story. Memories, Dreams, Reflections is that book, composed of conversations with his colleague and friend Aniela Jaffé, as well as chapters written in his own hand, and other materials. Jung continued to work on the final stages of the manuscript until shortly before his death on June 6, 1961, making this a uniquely comprehensive reflection on a remarkable life."
    },
    {
      name: "Man's Search For Meaning",
      rating: "5",
      description:
        "A prominent Viennese psychiatrist before the war, Viktor Frankl was uniquely able to observe the way that he and other inmates coped with the experience of being in Auschwitz. He noticed that it was the men who comforted others and who gave away their last piece of bread who survived the longest - and who offered proof that everything can be taken away from us except the ability to choose our attitude in any given set of circumstances."
    }
  ],
  Fiction: [
    {
      name: "1984",
      rating: "4",
      description:
        "Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society.Orwell, himself a democratic socialist, modelled the totalitarian government in the novel after Stalinist Russia and Nazi Germany."
    },
    {
      name: "Animal Farm",
      rating: "5",
      description:
        "The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, the rebellion is betrayed, and the farm ends up in a state as bad as it was before, under the dictatorship of a pig named Napoleon."
    },
    {
      name: "Life Over Two Beers and other stories ",
      rating: "2",
      description:
        "Written with Sanjeev's trademark flair, the stories crackle with irreverence and wit. In 'The Troll', a presumptuous blogger faces his undoing when he sets out to expose an Internet phenomenon. In the title story, a young man loses his job in the financial crisis and tries to reset his life over two beers. In 'The Intellectuals', a foreign researcher spends some memorable hours with Kolkata's ageing intellectuals. From the vicious politics of a Mumbai housing society to the snobberies of Delhi's cocktail circuit, the stories in Life over Two Beers get under the skin of a rapidly changing India-and leave you chuckling."
    }
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
            <div> Description: {book.description} </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
