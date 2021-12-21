import '../CompaniesSearchbar/CompaniesSearchbar.css';
import { Input } from 'antd';
const { Search } = Input;

const Candidatessearchbar = (props) => {
  const { candidatesList, setFilteredCandidates } = props;

  const handleInputChange = (word) => {
    const searchCandidates = candidatesList.filter((candidate) => {
      return candidate.name.toLowerCase().includes(word.toLowerCase());
    });
    setFilteredCandidates(searchCandidates);
  };

  return (
    <div className='container'>
      <div className='ContainerSearbar'>
        <Search
          onChange={(event) => handleInputChange(event.target.value)}
          placeholder='input search text'
          enterButton='Search'
          size='large'
        />
      </div>
    </div>
  );
};

export default Candidatessearchbar;
