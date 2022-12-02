import "../styles/cards.css";
import React from "react";

function Cardback({ name, moreInfo, flag, moreMoreInfo }) {
  console.log(moreMoreInfo);
  return (
    <div className="card__back">
      <p className="card__match">
        C'est un match avec <h2> {name} !</h2>
      </p>
      <img className="card__flag" src={flag} alt="drapeau" />
      {/* <ul>
        {moreMoreInfo &&
          moreMoreInfo.categories.map((el) => (
            <li>
              Rate of {el.name}: {el.score_out_of_10.toFixed(2)}/10
            </li>
          ))}
      </ul> */}
      <div className="card__infos">
        <p>
          {moreMoreInfo && moreMoreInfo.summary.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href={moreInfo && moreInfo.data.teleport_city_url}
        >
          More informations about the city
        </a>
      </div>
    </div>
  );
}

export default Cardback;
