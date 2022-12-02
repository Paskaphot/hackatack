import MatchsCityContext from "../context/MatchsCity";
import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Matchs() {
  const { cityMatched } = useContext(MatchsCityContext);

  useEffect(() => {
    console.log(cityMatched);
  }, []);
  return (
    <>
      {cityMatched.length &&
        cityMatched.map((el) => (
          <div>
            <img alt="salut" src={el[0].photos[0].image.mobile}></img>
            <p>{el[1].data.name}</p>
          </div>
        ))}

      <Link to={`/Swap`}>Salut</Link>
    </>
  );
}

export default Matchs;
