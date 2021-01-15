import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Beers from '../components/Layout/Beers';
import HomeFrame from '../components/Layout/HomeFrame';
import Footer from '../components/Layout/Footer';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Binouze</title>
        <link rel='canonical' href='http://mysite.com/exemple' />
        <meta name='description' content='Acheter des bières' />
      </Helmet>
      <Navbar />
      <HomeFrame />
      <Beers />
      <Footer />
    </div>
  );
}

export default Home;
