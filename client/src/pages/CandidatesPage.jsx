import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CandidatesSearchbar from '../components/Candidates Searchbar/CandidatesSearchbar';
import CardCandidate from '../components/CardCandidates/CardCandidate';
import { getCandidates } from '../services/candidates';
import * as PATHS from '../utils/paths';

const CandidatesPage = (props) => {
  const { user } = props;

  const navigate = useNavigate();
  const [fileteredCandidates, setFilteredCandidates] = useState([]);
  const [candidatesList, setCandidatesList] = useState([]);

  useEffect(() => {
    !user
      ? navigate(PATHS.LOGINCOMPANYPAGE)
      : getCandidates().then((response) => {
          setCandidatesList(response.data.getCandidates);
          setFilteredCandidates(response.data.getCandidates);
        });
  }, [navigate, user]);

  return (
    <div className='container'>
      <h1>CandidatesPage</h1>
      <CandidatesSearchbar
        setFilteredCandidates={setFilteredCandidates}
        candidatesList={candidatesList}
      />
      <div className='flexbox'>
        {fileteredCandidates?.map((getCandidates) => (
          <CardCandidate
            getCandidates={getCandidates}
            key={getCandidates._id}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidatesPage;
