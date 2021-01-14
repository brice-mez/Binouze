import React from "react";
import Navbar from "../components/Layout/Navbar";
import Beers from "../components/Layout/Beers";
import HomeFrame from "../components/Layout/HomeFrame";


function Home() {
  return (

    <div>
      <Navbar />
      <HomeFrame />
      <Beers />
    </div>
  );
}

export default Home;
