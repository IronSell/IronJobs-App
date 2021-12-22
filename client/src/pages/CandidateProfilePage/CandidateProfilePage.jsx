import { useEffect } from 'react';
import CandidateView from '../../components/CandidateProfile/CandidateView';
import { getCandidateProfile } from '../../services/candidates';

const CandidateProfile = (props) => {
  const { user } = props;

  useEffect(() => {
    getCandidateProfile(user._id);
  });

  return (
    <>
      <CandidateView user={user} />
    </>
  );
};

export default CandidateProfile;
