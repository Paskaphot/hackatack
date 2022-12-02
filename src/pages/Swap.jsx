import "../App.css";
import axios from "axios";
import Card from "../components/Card";
import "../styles/swap.css";
import { Link } from "react-router-dom";
import { React, useContext, useEffect, useState } from "react";
import MatchsCityContext from "../context/MatchsCity";
import { AiFillHeart } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { TbArrowBack } from "react-icons/tb";

function Swap() {
  const [search, setSearch] = useState();
  //   const [searchIn, setSearchIn] = React.useState();
  //   const [search2, setSearch2] = React.useState();
  const [slug, setSlug] = useState("paris");
  //   const [slug2, setSlug2] = React.useState("stockholm");
  const [random, setRandom] = useState(1);
  const [moreInfo, setMoreInfo] = useState();
  const [infoCard, setInfoCard] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const { setCityMatched, cityMatched } = useContext(MatchsCityContext);

  async function fetchCity(number) {
    const response = await axios("https://api.teleport.org/api/urban_areas/");
    const url = await response.data._links["ua:item"][number].name;
    setSlug(url.toLowerCase());
  }

  async function fetchAPI(s) {
    const response = await axios(
      `https://api.teleport.org/api/urban_areas/slug:${s}/images/`
    );
    setSearch(response.data);
  }

  //   async function fetchAPI2(s) {
  //     const response = await axios(
  //       `https://api.teleport.org/api/urban_areas/slug:${s}/images/`
  //     );
  //     setSearch2(response.data);
  //   }

  async function fetchMoreInfo(s) {
    const response = await axios(
      `https://api.teleport.org/api/urban_areas/slug:${s}/`
    );
    setMoreInfo(response);
  }

  useEffect(() => {
    fetchCity(random);
  }, [random]);

  useEffect(() => {
    console.log(search);
  }, [search]);

  useEffect(() => {
    fetchAPI(slug);
    fetchMoreInfo(slug);
    // fetchAPI2(search2);
    console.log(cityMatched);
    /*console.log(slug2);*/
    // setSearchIn({ current: search, next: search2 });
  }, [slug]);

  const randomNumber = () => {
    return Math.floor(Math.random() * 266) + 1;
  };

  return (
    <div className="swap">
      <div className="cardContainer">
        <Card
          isFlipped={isFlipped}
          image={search}
          name={slug}
          moreInfo={moreInfo}
        />
        {infoCard === false ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <button
                className="circleButton"
                type="button"
                onClick={() => setRandom(randomNumber())}
              >
                <IoMdClose />
              </button>
              <button
                className="circleButton"
                type="button"
                onClick={() => {
                  setInfoCard(true);
                  setIsFlipped(true);
                  setCityMatched((prev) => [...prev, [search, moreInfo]]);
                }}
              >
                <AiFillHeart />
              </button>
            </div>
            <div>
              <Link className="fakeButton" to={`/Matchs`}>
                Go to all Matches
              </Link>
              {/* <button type="button" onClick={() => setCityMatched("")}>
                Reset
              </button> */}
            </div>
          </div>
        ) : (
          <button
            className="circleButton"
            type="button"
            onClick={() => {
              setInfoCard(false);
              setIsFlipped(false);
            }}
          >
            <TbArrowBack />
          </button>
        )}
      </div>
    </div>
  );
}

export default Swap;
