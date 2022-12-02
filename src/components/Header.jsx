import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <h1 className="logoWrapper">
        <img alt="logo" src="/images/logo-tripder.svg" />
        <span className="logoWrapper__texts">
          <span className="logoWrapper__mainText">TRIPDER</span>
          Beyond pics
        </span>
      </h1>
    </header>
  );
}

export default Header;
