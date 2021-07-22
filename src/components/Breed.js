import React from 'react';
import {Link} from 'react-router-dom';

const Breed = (props) => {
   /*
      In Breed component, it has breedName as props. 
      It renders breedName and a Link that opens a seperate page. 
   */
  return (
    <li>
      <h2>{props.name}</h2>
      <Link className="link" to={"/pictures/"+props.name}>Dog pics</Link>
    </li>
  );
};

export default Breed;
