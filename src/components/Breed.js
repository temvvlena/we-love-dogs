import React from 'react';
import {Link} from 'react-router-dom';

const Breed = (props) => {
   /*
      In Breed components, it takes breedName as props and renders its name.
      It also has a router that opens a seperate page. 
   */
  return (
    <li>
      <h2>{props.name}</h2>
      <Link className="link" to={"/pictures/"+props.name}>Dog pics</Link>
    </li>
  );
};

export default Breed;
