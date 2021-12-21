import '../App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { getOffer } from '../services/offers'

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

  
    const addToFav=()=>{
      axios.get('/favorites/:user_id/company/:job_id')
    } 
  

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-12 p-3 border-color">
          <div className="row ">
            <div className="col-md-4">
              <img
                className="w-60"
                src="https://www.top-employers.com/contentassets/11f5c0206ef34308af4c76f429cf6f19/oid00d200000000wi7ids0683y000008hunyda3y0000005tfbha68odegbbbyzywsyis6wtee5ks_ozkx8vqvgrqknt4aspdffalse2"
                alt="Company logo"
              />
            </div>
            <div className="col-md-8">
              <div className="card-block">
                <h1 className="card-title">{offer.jobTitle}</h1>
                <hr/>
                <p className="card-text text-justify color-description-offer">{offer.salary}</p>
                <p className="card-text text-justify color-description-offer">
                  {offer.experienceYears}
                </p>
                <p className="card-text text-justify color-description-offer">{offer.province}</p>
                <p className="card-text text-justify">{offer.requirements}</p>
                <p className="card-text text-justify color-description-offer">{offer.schedule}</p>
                <p className="card-text text-justify">{offer.description}</p>
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
