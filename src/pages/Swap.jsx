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
  const [slug, setSlug] = useState("paris");
  const [random, setRandom] = useState(1);
  const [moreInfo, setMoreInfo] = useState();
  const [moreMoreInfo, setMoreMoreInfo] = useState();
  const [infoCard, setInfoCard] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [countryInfo, setCountryInfo] = useState("");
  const [region, setRegion] = useState("");
  const { setCityMatched, cityMatched } = useContext(MatchsCityContext);

  async function fetchCity(number) {
    const response = await axios("https://api.teleport.org/api/urban_areas/");
    const url = await response.data._links["ua:item"][number].name;
    setSlug(url.toLowerCase());
  }

  async function fetchInfoByCountry(name) {
    const response = await axios(`https://restcountries.com/v3.1/name/${name}`);
    setCountryInfo(response.data[0]);
  }

  async function fetchAPI(s) {
    const response = await axios(
      `https://api.teleport.org/api/urban_areas/slug:${s}/images/`
    );
    console.log(response);
    setSearch(response.data);
  }

  async function fetchMoreInfo(s) {
    const response = await axios(
      `https://api.teleport.org/api/urban_areas/slug:${s}/`
    );
    let regionn = response.data.continent;
    setRegion(regionn);
    const cntryName = response.data.full_name.split(", ");
    console.log(cntryName);
    setCountryName(cntryName[1]);
    setMoreInfo(response);
  }
  async function fetchMoreMoreInfo(s) {
    const response = await axios(
      `https://api.teleport.org/api/urban_areas/slug:${s}/scores/`
    );
    console.log(response);
    setMoreMoreInfo(response.data);
  }

  useEffect(() => {
    fetchCity(random);
  }, [random]);

  useEffect(() => {
    fetchInfoByCountry(countryName);
  }, [moreInfo]);

  useEffect(() => {
    fetchAPI(slug);
    fetchMoreInfo(slug);
    fetchMoreMoreInfo(slug);
    console.log(region);
    console.log(`region2 ${region}`);
  }, [slug]);

  useEffect(() => {
    console.log(countryInfo);
  }, [countryInfo]);

  // useEffect(() => {
  //   fetchInfoByCountry(countryName);
  // }, [countryName]);

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
          flag={countryInfo}
          moreMoreInfo={moreMoreInfo}
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
