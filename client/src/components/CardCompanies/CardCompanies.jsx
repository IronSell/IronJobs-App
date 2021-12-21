import './CardCompanies.css'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import * as PATHS from '../../utils/paths';


function CardCompanies(props) {
  const { companyLogo, name, province, companyUrl, _id } = props.searchCompany;
  const { Meta } = Card;
  return (
    <div className='CardCompanies'>
      <Link to={PATHS.COMPANYPAGE + '?id=' + _id}>
        <Card
          hoverable
          style={{ width: 260 }}
          cover={<img alt='example' src={companyLogo} />}
        >
          <Meta title={name} description={province} />
          <p>{companyUrl} </p>
        </Card>
      </Link>
    </div>
  );
}

export default CardCompanies;
