import axios from 'axios';
import { useEffect } from 'react';
import * as USER_HELPERS from '../../utils/userToken';
import CandidateView from '../../components/CandidateProfile/CandidateView' ;

const CandidateProfile = (props) => {
  const { authenticate, user } = props;

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/candidates/profile/${user._id}`,
        {
          headers: {
            Authorization: USER_HELPERS.getUserToken(),
          },
        }
      )
      .then((response) => {
        authenticate(response.data.showUser);
      });
  }, []);

  return (
    <>
      <CandidateView user={user} />
    </>
  );
};

export default CandidateProfile;