import '../App.css';
import CardOffer from '../components/CardOffers/CardOffers';
import { useState, useEffect } from 'react';
import { getOffers } from '../services/offers';
import CardCompanies from '../components/CardCompanies/CardCompanies';
import { getCompanies } from '../services/companies';
import Header from '../components/Header/Header';

function HomePage() {
  const [offers, setOffers] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getOffers().then((response) => {
      setOffers(response.data.searchOffers.slice(1, 3));
    });
  }, []);

  useEffect(() => {
    getCompanies().then((response) => {
      setCompanies(response.data.searchCompany.slice(1, 4));
    });
  }, []);

  return (
    <main className='App'>
      <div className='container'>
        <Header />
        <h2>Top Offers</h2>
        <div className='offersStylesJobPage'>
          {offers?.map((searchOffers, index) => (
            <CardOffer searchOffers={searchOffers} key={index + Date.now()} />
          ))}
        </div>
        <h2>Top Companies</h2>
        <div className='companiesHomePage'>
          {companies?.map((searchCompany, index) => (
            <CardCompanies
              searchCompany={searchCompany}
              key={index + Date.now()}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
