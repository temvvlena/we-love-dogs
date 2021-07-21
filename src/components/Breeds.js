import React, { useState } from "react";

import BreedFilter from "./BreedFilter";
import BreedList from "./BreedList";

const DogBreedList = (props) => {
  /*
      In this components, we are rendering two components: BreedFilter and BreedList

      In BreedFilter component, we are passing all the dogBreedNames and then receives selectedBreed. 
      We then use useState to make the selectedBreed as filteredBreed. 

      After modifying the state, we will pass both dogBreedNames and filteredBreed to BreedList   
    */
  const [filteredBreed, setFilteredBreed] = useState("");

  const filterChangeHandler = (selectedBreed) => {
    setFilteredBreed(selectedBreed);
  };
  return (
    <div>
      <BreedFilter
        selected={filteredBreed}
        onChangeFilter={filterChangeHandler}
        breedNames={props.dogBreeds}
      />
      <BreedList breedNames={props.dogBreeds} selectedValue={filteredBreed} />
    </div>
  );
};

export default DogBreedList;
