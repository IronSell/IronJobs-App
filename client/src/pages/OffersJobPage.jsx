import { useState, useEffect } from 'react'

import { getOffers } from '../services/offers'
import Searchbar from '../components/Searchbar/Searchbar'
import CardOffer from '../components/CardOffers/CardOffers'
import { Skeleton } from 'antd'
import '../App.css'

function OffersJobPage() {
  const [fileteredOffers, setFilteredOffers] = useState([])
  const [offers, setOffers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getOffers().then((response) => {
      setOffers(response.data.searchOffers)
      setFilteredOffers(response.data.searchOffers)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="container bebasNeue">
      <h1>Offers</h1>
      <Searchbar setFilteredOffers={setFilteredOffers} offers={offers} />
      <div className="offersStylesJobPage">
        {isLoading ? (
          <Skeleton />
        ) : (
          fileteredOffers?.map((searchOffers, index) => (
            <CardOffer searchOffers={searchOffers} key={index + Date.now()} />
          ))
        )}
      </div>
    </div>
  )
}

export default OffersJobPage
