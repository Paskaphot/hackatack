import "../App.css";
import React from "react";
import axios from "axios";
import Card from "../components/Card";
import "../styles/swap.css";

function Swap() {
  const [search, setSearch] = React.useState();
  //   const [searchIn, setSearchIn] = React.useState();
  //   const [search2, setSearch2] = React.useState();
  const [slug, setSlug] = React.useState("paris");
  //   const [slug2, setSlug2] = React.useState("stockholm");
  const [random, setRandom] = React.useState(1);
  const [moreInfo, setMoreInfo] = React.useState();
  const [infoCard, setInfoCard] = React.useState(false);
  const [isFlipped, setIsFlipped] = React.useState(false);

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

  React.useEffect(() => {
    fetchCity(random);
  }, [random]);

  React.useEffect(() => {
    console.log(search);
  }, [search]);

  React.useEffect(() => {
    fetchAPI(slug);
    fetchMoreInfo(slug);
    // fetchAPI2(search2);
    console.log(slug);
    console.log(moreInfo);
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
          <div>
            <button type="button" onClick={() => setRandom(randomNumber())}>
              not match
            </button>
            <button
              type="button"
              onClick={() => {
                setInfoCard(true);
                setIsFlipped(true);
              }}
            >
              match
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              setInfoCard(false);
              setIsFlipped(false);
            }}
          >
            retour
          </button>
        )}
      </div>
    </div>
  );
}

export default Swap;
