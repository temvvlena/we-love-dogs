import React, { useState, useEffect } from "react";
import Breeds from "./Breeds";

function Home() {
  /*
      I used three states. 
      dogBreeds restore an array of items. The other two are just helpful for debugging purposes.
  */
  const [dogBreeds, setDogBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect will fetch API as soon as a user enters our website. Will only run once.
  useEffect(() => {
    fetchDogsHandler();
  }, []);

  // Here, I am fetching the data and then covert it into an array so I can use it later.
  async function fetchDogsHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      // Here I created a new list and both time and space complexity of this function will O(N)
      const transformedDogBreeds = [];
      for (const property in data.message) {
        var temporaryObject = {};
        temporaryObject["id"] = property;
        temporaryObject["breedName"] = property;
        transformedDogBreeds.push(temporaryObject);
      }
      // My array now looks like this --> [{id: "bulldog", breedName: "bulldog", breedList: Array(3) , more ....}
      // So, I can setState and pass dogBreeds as props.
      setDogBreeds(transformedDogBreeds);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      {/* After Filtering, a user can click "Fetch All Dog Breeds" and go see all dogs or just click back arrow */}
      <section>
        <button onClick={fetchDogsHandler}>Fetch All Dog Breeds</button>
      </section>

      {/* It renders based on 3 states. If displays if there's any error while fetching the data */}
      {/* After rendering it passes the array to Breeds component  */}
      <section>
        {!isLoading && dogBreeds.length > 0 && <Breeds dogBreeds={dogBreeds} />}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default Home;
