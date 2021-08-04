import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useHttp from "../hooks/useHttp";

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
  const [check, setCheck] = useState(false);
  const { id } = useParams();

  const { isLoading, error, sendRequest: fetchPictures } = useHttp();

  // Just like Home page, it also uses useEffect and automatically renders it.
  useEffect(() => {
    const transformTasks = (taskObj) => {
      const pictures = Object.values(taskObj.message);
      setData(pictures);
    };

    fetchPictures(
      { url: "https://dog.ceo/api/breed/" + id + "/images/random/3" },
      transformTasks
    );
    // Only rerenders if one of the following three changes.
  }, [fetchPictures, id, check]);

  // Only renders the images, if the state has 3 images in an array.
  // Otherwise, return an empty string.
  let display = "";
  if (data.length !== 0) {
    display = data.map((dog, index) => (
      <img src={dog} alt={id} key={Math.random().toString()} />
    ));
  }

  // It will change the state therefore it causes to rerender and
  // shows more cute dog pictures.
  const buttonHandler = () => {
    setCheck((prevCheck) => !prevCheck);
  };

  return (
    <section>
      <h3>Random three {id} breed dog pictures</h3>
      <Link
        className="link2"
        style={{ marginRight: "20px" }}
        // Setting the route to the Home page
        to={"/"}
      >
        {"Back to Home"}
      </Link>
      <button onClick={buttonHandler}>More Dog Pics</button>
      <div className="container">
        {!isLoading && display}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </div>
    </section>
  );
};

export default EachBreed;
