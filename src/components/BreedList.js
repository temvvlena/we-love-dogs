import React from "react";

import Breed from "./Breed";

const BreedList = (props) => {
  /*
    In this BreedList component, we have allBreeds array and selectedValue as props.

    We can display either all breedList or the selectedValue.

    In this code, the logic is it checks if there's no selectedValue, render the whole array.
    Otherwise, only render the selectedValue
  */

  let allBreeds = props.selectedValue;
  if (allBreeds === "") {
    allBreeds = props.breedNames.map((breed) => (
      <Breed key={breed.id} name={breed.breedName} />
    ));
  } else allBreeds = <Breed key={allBreeds} name={allBreeds} />;

  return <ul>{allBreeds}</ul>;
};

export default BreedList;
