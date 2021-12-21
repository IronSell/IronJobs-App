import './Searchbar.css';
import { Input } from 'antd';
const { Search } = Input;

const Searchbar = (props) => {
  const { offers, setFilteredOffers } = props;

  const handleInputChange = (word) => {
    const searchProducts = offers.filter((offer) => {
      return offer.jobTitle.toLowerCase().includes(word.toLowerCase());
    });
    setFilteredOffers(searchProducts);
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

export default Searchbar;
