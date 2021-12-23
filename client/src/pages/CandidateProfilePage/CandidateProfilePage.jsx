import { useEffect } from 'react';
import CandidateView from '../../components/CandidateProfile/CandidateView';
import { getCandidateProfile } from '../../services/candidates';

const CandidateProfile = (props) => {
  const { user, authenticate } = props;

  useEffect(() => {
    getCandidateProfile(user._id).then((res) => {
      authenticate(res.data.showUser)
    });
  }, []);
  return (
    <>
      <CandidateView user={user} authenticate={authenticate} />
    </>
  );
};

export default CandidateProfile;
