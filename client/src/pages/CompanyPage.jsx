import '../components/CardCompany/CardCompany.css';
import { useState, useEffect } from 'react';
import { getCompany } from '../services/companies';

const CompanyPage = () => {
  const [company, setCompany] = useState([]);

  let urlStr = window.location.href;
  let url = new URL(urlStr);
  let search_params = url.searchParams;
  let id = search_params.get('id');

  useEffect(() => {
    getCompany(id).then((response) => {
      setCompany(response.data.showCompany);
    });
  }, []);

  return (
    <div className='wrapper' id='app'>
      <div className='card-form'>
        <div className='card-list'>
          <div className='card-item -front'>
            <div className='card-item__side'>
              <div className='card-item__cover'>
                <img
                  src={company.companyLogo}
                  className='card-item__bg'
                  alt='img'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='card-form__inner'>
          <div>
            <h1>{company.name}</h1>
          </div>
          <h2>{company.professionalSector}</h2>
          <p>
            {company.address} {company.province}
          </p>
          <p>
            <b>{company.companyUrl}</b> {company.cif}
          </p>
          <p>{company.companyDescription}</p>
          <button className='button-class card-form__button'>
            <b>Offers</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;


