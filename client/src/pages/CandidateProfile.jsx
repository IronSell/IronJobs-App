import '../App.css';
import { useState, useEffect } from 'react';
import { getCandidate } from '../services/candidates';

const CandidateProfile = () => {
  const [candidate, setCandidate] = useState([]);

  let urlStr = window.location.href;
  let url = new URL(urlStr);
  let search_params = url.searchParams;
  let id = search_params.get('id');

  useEffect(() => {
    getCandidate(id).then((response) => {
      console.log({ response });
      setCandidate(response.data.showUser);
    });
  }, []);

  return (
    <div className='OfferPage'>
      <h1>Hola</h1>
      <h1>{candidate.name}</h1>
      <h2>{candidate.lastName}</h2>
    </div>
  );
};

export default CandidateProfile;
