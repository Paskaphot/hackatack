import "../App.css";
import React from "react";
import axios from "axios";
import Card from "../components/Card";

function Swap() {
  const [search, setSearch] = React.useState();
  const [slug, setSlug] = React.useState("paris");
  const [random, setRandom] = React.useState(1);
  const [moreInfo, setMoreInfo] = React.useState();

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

  async function fetchMoreInfo(s) {
    const response = await axios(
      `https://api.teleport.org/api/urban_areas/slug:${s}/`
    );
    setMoreInfo(response);
  }
  
setCity({prev value: city1, current value: city2, next value: city3})
setCity(prev value: current value, current value: next value, nextcity: )

  React.useEffect(() => {
    fetchCity(random);
  }, [random]);

  React.useEffect(() => {
    console.log(search);
  }, [search]);

  React.useEffect(() => {
    fetchAPI(slug);
    fetchMoreInfo(slug);
    console.log(slug);
    console.log(random);
    console.log(moreInfo);
  }, [slug]);

  React.useEffect(() => {
    console.log(random);
  }, [random]);

  const randomNumber = () => {
    return Math.floor(Math.random() * 266) + 1;
  };

  return (
    <div className="Swap">
      <Card image={search} name={slug} moreInfo={moreInfo} />
      <button type="button" onClick={() => setRandom(randomNumber())}>
        Salut
      </button>
    </div>
  );
}

export default Swap;
