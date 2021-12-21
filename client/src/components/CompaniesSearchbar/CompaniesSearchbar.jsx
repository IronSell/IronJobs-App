import '../CompaniesSearchbar/CompaniesSearchbar.css';
import { Input } from 'antd';
const { Search } = Input;

const SearchbarCompanies = (props) => {
  const { companies, setFilteredCompanies } = props;

  const handleInputChange = (word) => {
    const searchCompanies = companies.filter((company) => {
      return company.name.toLowerCase().includes(word.toLowerCase());
    });
    setFilteredCompanies(searchCompanies);
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

export default SearchbarCompanies;
