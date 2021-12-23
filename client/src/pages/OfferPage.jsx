import '../App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { getOffer } from '../services/offers'
import { FieldTimeOutlined, EnvironmentOutlined, EuroCircleOutlined } from '@ant-design/icons';


const OfferPage = () => {
  const [offer, setOffer] = useState([])

  let urlStr = window.location.href
  let url = new URL(urlStr)
  let search_params = url.searchParams
  let id = search_params.get('id')

  useEffect(() => {
    getOffer(id).then((response) => {
      setOffer(response.data.showOffer)
    })
  }, [])

  
    const addToFav=(props)=>{
      // axios.get(`/favorites/${id}/company/:job_id`)
    } 
  

  return (
    <div className="container offerPage">
      <div className="row">
        <div className="card col-md-12 p-3 border-color">
          <div className="row ">
            <div className="col-md-3">
              <img
                className="w-60"
                src={offer.companyLogo}
                alt="Company logo"
              />
            </div>
            <div className="col-md-8">
              <div className="card-block">
                <h1 className="card-title">{offer.jobTitle}</h1>
                <hr/>
                <p className="card-text text-justify">{offer.requirements}</p>
                <p className="card-text text-justify">{offer.description}</p>
                <p className="card-text text-justify color-description-offer">{offer.experienceYears}</p>
                <p className='space cardOfferBorderListItem'>
                  <span>
                    <EnvironmentOutlined className='offerLogo' />
                  </span>{' '}
                  {offer.province} | {offer.salary}{' '}
                  <span>
                    <EuroCircleOutlined className='offerLogo' />
                  </span>{' '}
                  |
                  <span>
                    <FieldTimeOutlined className='offerLogo' />
                  </span>{' '}
                  {offer.schedule}{' '}
                </p>
                <button className="ApllyButton" onClick={addToFav}>Apply</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferPage
