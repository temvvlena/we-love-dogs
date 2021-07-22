import React from "react";

import { Link } from 'react-router-dom';

const DisplayBreeds = ({ breedNames, selectedValue }) => {
  /*
  Goal of DisplayBreeds component:
    1) Display the breed names on Home page.
    2) If user clicks on a dog breed, it will open a seperate page

    We can display breed names by following the pseudocode:
    We have two conditons. 
        -  First, the user can see the all 95 Dog Breeds
        -  Second, the user can see only one Dog Breed
    
    If the user has selected to see all 95 Dog Breeds, 
        we will iterate through the list and call <Link />
    
    else,  
        we will call <Link />, only once. 

    We can open a seperate page by following the pseudocode.
    In the <Link /> component, If the user clicks on one of the dog breed names 
    on the home page, we will render EachBreed component  
  */

  let allBreeds;
  if (selectedValue === "all") {
    allBreeds = breedNames.map((breed, index) => (
      <section key={index} className="section2">
        <Link key={Math.random().toString()} className="link2" to={"/pictures/"+breed}>{breed}</Link>
      </section>
    ));
  } else allBreeds = 
      <section className="section2">
         <Link className="link2" to={"/pictures/"+selectedValue}>{selectedValue}</Link>
      </section>

  // Rendering all the dog breed names here.
  return <ul>{allBreeds}</ul>;
};

export default DisplayBreeds;
