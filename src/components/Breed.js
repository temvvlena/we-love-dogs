import React from 'react';
import {Link} from 'react-router-dom';

const Breed = (props) => {

  return (
    <li>
      <h2>{props.name}</h2>
      <Link className="link" to={"/pictures/"+props.name}>Dog pics</Link>
    </li>
  );
};

export default Breed;
