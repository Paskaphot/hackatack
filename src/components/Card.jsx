import React from "react";

const Card = ({ image, name, moreInfo }) => {
  React.useEffect(() => {
    console.log(image);
  }, [image]);
  return (
    <div className="card">
      <div className="card__front">
        <img alt="landscape" src={image && image.photos[0].image.mobile} />
      </div>
      <div className="card__back">
        <p className="card__match">
          C'est un match avec <h2> {name} !</h2>
        </p>
        <img src="" alt="drapeau" />
        <div className="card__infos">
          <ul>
            <li>Population : </li>
            <li>Capitale : </li>
            <li>Monnaie : </li>
          </ul>
          <a href={moreInfo && moreInfo.data.teleport_city_url}>
            More informations about the city
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
