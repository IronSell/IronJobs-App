import { useState, useEffect } from 'react'

import SearchbarCompanies from '../components/CompaniesSearchbar/CompaniesSearchbar'
import CardCompanies from '../components/CardCompanies/CardCompanies'
import { getCompanies } from '../services/companies'
import { Skeleton } from 'antd'
import '../App.css'

const CompaniesPage = () => {
  const [fileteredCompanies, setFilteredCompanies] = useState([])
  const [companies, setCompanies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCompanies().then((response) => {
      setCompanies(response.data.searchCompany)
      setFilteredCompanies(response.data.searchCompany)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="container bebasNeue">
      <h1>Companies</h1>
      <SearchbarCompanies
        setFilteredCompanies={setFilteredCompanies}
        companies={companies}
      />
      <div className="companiesStylesJobPage">
        {isLoading ? (
          <Skeleton />
        ) : (
          fileteredCompanies?.map((searchCompany, index) => (
            <CardCompanies
              searchCompany={searchCompany}
              key={index + Date.now()}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default CompaniesPage
