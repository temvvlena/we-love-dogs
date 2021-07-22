import React, { useState, useEffect } from "react";
import UserBreed from "./UserBreed";

function Home() { 
  /*
    Goal of Home component:
      1) Fetch all 95 dog breeds
  */

  //I used three states. dogBreeds restores an array of all dog breeds. 
  //The other two are just helpful for debugging purposes.
  const [dogBreeds, setDogBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect will call the API for only once as soon as the user enters our website
  useEffect(() => {
    fetchDogsHandler();
  }, []);

  // calling API
  async function fetchDogsHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const transformedDogBreeds = Array.from(Object.keys(responseData.message));
      //transformedDogBreeds contains an array of all 95 dog breeds' name.
      setDogBreeds(transformedDogBreeds);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      {/* It renders based on 3 states. If displays if there's any error while fetching the data */}
      {/* After the successful API call, we are passing the total 95 dog breed array to UserBreed component where 
      our user will filter the data  */}
      <section>
        {!isLoading && dogBreeds.length > 0 && <UserBreed dogBreeds={dogBreeds} />}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default Home;
