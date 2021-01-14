import React from 'react';
import { dataBase } from '../components/Api';

class Home extends React.Component {
  render() {
    const bieres = dataBase;

    return (
      <div>
        <h1>Binouze</h1>
        <h2>Achètes en mets en fav tes bières</h2>
        <div className='beercard'>
          {bieres.map((biere) => (
            <>
              <p>{biere.id}</p>
              <h3>{biere.name}</h3>
              <img src={biere.picture} alt='bière' />
              <p>{biere.text}</p>
              <p>{biere.price}</p>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
