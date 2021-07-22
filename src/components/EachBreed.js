import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const EachBreed = () => {
  /*
  Goal of EachBreed component:
      1) After when the user clicks to see a dog breed, 
         we will fetch three random pictures of that breed.
      2) Create two UI. 
          --One UI, a user can get random 3 more pictures
          --Another UI, a user can click a button to go back 
            to the home page
*/
  const [data, setData] = useState([]);
  const { id } = useParams();

  // Just like Home page, it also uses useEffect and automatically renders it.
  // Since we used useParams, I used useCallback to get rid of some bugs.
  const fetchPictures = useCallback(async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/" + id + "/images/random/3"
    );
    const responseData = await response.json();
    const pictures = Object.values(responseData.message);
    setData(pictures);
  }, [id]);

  useEffect(() => {
    fetchPictures();
  }, [fetchPictures]);

  // Only render the images, if the state has 3 images in an array.
  // Otherwise, return an empty string. 
  let display = "";
  if (data.length !== 0) {
    display = data.map((dog, index) => <img src={dog} alt={id} key={Math.random().toString()} />);
  }

  return (
    <section>
      <h3>Random three {id} breed dog pictures</h3>
      <Link 
        className="link2" 
        style={{marginRight: '20px'}}
        // Setting the route to the Home page
        to={"/"}>{"Back to Home"}
      </Link>
      <button onClick={fetchPictures}>More dog pics!</button>
      <div className="container">{display}</div>
    </section>
  );

};

export default EachBreed;
