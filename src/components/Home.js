import React from "react";
import Header from "./Homepage/HeaderInfo";
import Cards from "./Homepage/CardsInfo";
import CardsDev from "./Homepage/CardDev";
import IconsHome from "./Homepage/IconSection";

function Home() {
  return (
    <>
      <Header className="container-fluid"></Header>
      <div className="container">
        <Cards></Cards>
        <IconsHome></IconsHome>
        <CardsDev></CardsDev>
      </div>
    </>
  );
}

export default Home;
