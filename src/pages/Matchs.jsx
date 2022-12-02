import MatchsCityContext from "../context/MatchsCity";
import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/match.css";
import { TbArrowBack } from "react-icons/tb";

function Matchs() {
  const { cityMatched } = useContext(MatchsCityContext);

  useEffect(() => {
    console.log(cityMatched);
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {cityMatched.length &&
          cityMatched.map((el) => (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                margin: "30px",
              }}
            >
              <img
                style={{ height: "400px", borderRadius: "10px" }}
                alt="salut"
                src={el[0].photos[0].image.mobile}
              ></img>
              <p
                style={{
                  backgroundColor: " #2f8876",
                  padding: "30px 40px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                {el[1].data.name}
              </p>
            </div>
          ))}
      </div>
      <Link to={`/Swap`} className="goBackButton">
        {" "}
        <TbArrowBack />
      </Link>
    </div>
  );
}

export default Matchs;
