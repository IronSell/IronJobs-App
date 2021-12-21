import '../App.css';
import Searchbar from '../components/Searchbar/Searchbar';
import CardOffer from '../components/CardOffers/CardOffers';
import { useState, useEffect } from 'react';
import { getOffers } from '../services/offers';

function OffersJobPage() {
  const [fileteredOffers, setFilteredOffers] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers().then((response) => {
      setOffers(response.data.searchOffers);
      setFilteredOffers(response.data.searchOffers);
    });
  }, []);

  return (
    <div className='container '>
      <h1>OffersJobPage</h1>
      <Searchbar setFilteredOffers={setFilteredOffers} offers={offers} />
      <div className='offersStylesJobPage'>
        {fileteredOffers?.map((searchOffers, index) => (
          <CardOffer searchOffers={searchOffers} key={index + Date.now()} />
        ))}
      </div>
    </div>
  );
}

export default OffersJobPage;
