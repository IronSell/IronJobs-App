import '../App.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CandidatesSearchbar from '../components/Candidates Searchbar/CandidatesSearchbar'
import CardCandidate from '../components/CardCandidates/CardCandidate'
import { getCandidates } from '../services/candidates'
import * as PATHS from '../utils/paths'
import { Skeleton } from 'antd'

const CandidatesPage = (props) => {
  const { user } = props

  const [fileteredCandidates, setFilteredCandidates] = useState([])
  const [candidatesList, setCandidatesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    !user
      ? navigate(PATHS.LOGINCOMPANYPAGE)
      : getCandidates().then((response) => {
          setCandidatesList(response.data.getCandidates)
          setFilteredCandidates(response.data.getCandidates)
          setIsLoading(false)
        })
  }, [navigate, user])

  return (
    <div className="container bebasNeue">
      <h1>Candidates</h1>
      <CandidatesSearchbar
        setFilteredCandidates={setFilteredCandidates}
        candidatesList={candidatesList}
      />
      <div className="flexbox">
        {isLoading ? (
          <div className="skeleton">
            <Skeleton avatar paragraph={{ rows: 4 }} />
            <Skeleton avatar paragraph={{ rows: 4 }} />
            <Skeleton avatar paragraph={{ rows: 4 }} />
          </div>
        ) : (
          fileteredCandidates?.map((getCandidates) => (
            <CardCandidate
              getCandidates={getCandidates}
              key={getCandidates._id}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default CandidatesPage
