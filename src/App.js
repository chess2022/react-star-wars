
import './App.css';
import "./web_fonts/distantgalaxy_regular_macroman/stylesheet.css";
import { useState, useEffect } from "react";
import StarshipDisplay from './components/Starship';


export default function App() {
  // state to hold starship data
  const [starship, setStarship] = useState([]);
  // function to getStarship
  const getStarship = async () => {
    // make fetch request and store response
    const response = await fetch("https://swapi.dev/api/starships/");
    // parse JSON response into a javascript object
    const data = await response.json();
    // set the Starship state to the starships
    setStarship(data);
  };

  useEffect(() => {getStarship()}, []);

  // map    
  const starships = starship?.results?.map((eachShip, index) => {
    //  use ? to check if the object is there - shorthand for if -> then
    console.log(eachShip);
    return <StarshipDisplay name={eachShip.name} key={index} />;
  });

  return (
    <>
      <h1>Star Wars Starships</h1>
      <div className="starship-display">{starships}</div>
    </>
  );
}