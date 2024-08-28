import { React, useState } from "react";
import Button from "./Button";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any").then((res) =>
      res.json().then((data) => setJoke(data.joke))
    );
  };

  return (
    <div className="joke">
      <Button callApi={fetchJoke} />
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
