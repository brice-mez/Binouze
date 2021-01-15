import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Beers from '../components/Layout/Beers';
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
      <Beers />
    </div>
  );
}

export default Home;
