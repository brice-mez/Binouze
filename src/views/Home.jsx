import React from "react";
import Navbar from "../components/Layout/Navbar";
import Beers from "../components/Layout/Beers";
import HomeFrame from "../components/Layout/HomeFrame";
import Footer from "../components/Layout/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <HomeFrame />
      <Beers />
      <Footer />
    </div>
  );
}

export default Home;
