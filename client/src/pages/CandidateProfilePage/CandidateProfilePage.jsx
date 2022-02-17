import { useEffect, useState } from 'react'

import { Skeleton } from 'antd'
import CandidateView from '../../components/CandidateProfile/CandidateView'
import { getCandidateProfile } from '../../services/candidates'

const CandidateProfile = (props) => {
  const { user, authenticate } = props
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCandidateProfile(user._id).then((res) => {
      authenticate(res.data.showUser)
    })
    setIsLoading(false)
  }, [authenticate, user._id])
  return (
    <>
      {isLoading ? (
        <div className="container">
          <div className="skeleton__2">
            <Skeleton avatar paragraph={{ rows: 4 }} />
          </div>
        </div>
      ) : (
        <CandidateView user={user} authenticate={authenticate} />
      )}
    </>
  )
}

export default CandidateProfile
