import React, { useState } from "react";

import BreedFilter from "./BreedFilter";
import DisplayBreeds from "./DisplayBreeds";

const UserBreed = ({ dogBreeds }) => {
  /*  
    Goal of UserBreed Component:
      1) Find out which dogBreed name the user filtered on the home page. 
      2) Pass that filtered dogBreed value to DisplayBreeds component
  */

  // On default, if the user has not selected any dog breed, it will show all dog breeds
  const [filteredBreed, setFilteredBreed] = useState("all");

  // If the user has selected a dog breed, it will change our state
  const filterChangeHandler = (selectedBreed) => {
    setFilteredBreed(selectedBreed);
  };

  return (
    <div>
      {/* In BreedFilter component, we are passing all the 95 Dog Breed array
      and then receives (only one or all) filtered dog breed that the user chosen.*/}
      <BreedFilter
        selected={filteredBreed}
        onChangeFilter={filterChangeHandler}
        breedNames={dogBreeds}
      />
      {/* In DisplayBreeds component, after when the user selected the dog breed, 
      we will pass the filtered dog breed to DisplayBreeds component
      so that it will display the filtered dog breed on the home page*/}
      <DisplayBreeds breedNames={dogBreeds} selectedValue={filteredBreed} />
    </div>
  );
};

export default UserBreed;
