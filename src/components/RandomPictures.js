import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";

const RandomPictures = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  // Here I am using useParams and then fetching the API
  // Just like Home page, it also uses useEffect and automatically renders it.
  // Since we used useParams, I used useCallback to get rid of some bugs.
  const fetchPictures = useCallback(async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/" + id + "/images/random/3"
    );
    const data = await response.json();
    // Restoring three pictures in a list and then restoring them in our state.
    const pictures = [];
    for (const property in data.message) {
      var temporaryObject = {};
      temporaryObject["name"] = data.message[property];
      pictures.push(temporaryObject);
    }
    setData(pictures);
  }, [id]);

  useEffect(() => {
    fetchPictures();
  }, [fetchPictures]);

  // Go through the array and if setData has been called, it will go through the array
  let display = "";
  if (data.length !== 0) {
    display = data.map((dog) => <img src={dog.name} alt={dog.name} />);
  }

  return (
    <section>
      <h3>Random three {id} breed dog pictures</h3>
      <button onClick={fetchPictures}>Click here for more dogs</button>
      <div className="container">{display}</div>
    </section>
  );
};

export default RandomPictures;
