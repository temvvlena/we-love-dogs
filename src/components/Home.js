import React, { useState, useEffect } from "react";
import UserBreed from "./UserBreed";
import useHttp from "../hooks/useHttp";

function Home() {
  /*
    Goal of Home component:
      1) Fetch all 95 dog breeds
  */

  //dogBreeds restores an array of all dog breeds.
  const [dogBreeds, setDogBreeds] = useState([]);

  // Custom hook will return the following three variables.
  const { isLoading, error, sendRequest: fetchDogsHandler } = useHttp();

  useEffect(() => {
    // We will pass transformTasks in fetchDogsHandler
    const transformTasks = (taskObj) => {
      const transformedDogBreeds = Array.from(Object.keys(taskObj.message));
      setDogBreeds(transformedDogBreeds);
    };

    // Since we already have sendRequest as fetchDogsHandler, we have
    // to pass two parameters: url and transformTasks. Now, the page
    // will rerender only if fetchDogsHandler changes.
    fetchDogsHandler(
      { url: "https://dog.ceo/api/breeds/list/all" },
      transformTasks
    );
  }, [fetchDogsHandler]);
  console.log(dogBreeds);

  return (
    <React.Fragment>
      {/* It renders based on 3 states. If displays if there's any error while fetching the data */}
      {/* After the successful API call, we are passing the total 95 dog breed array to UserBreed component where 
      our user will filter the data  */}
      <section>
        {!isLoading && dogBreeds.length > 0 && (
          <UserBreed dogBreeds={dogBreeds} />
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default Home;