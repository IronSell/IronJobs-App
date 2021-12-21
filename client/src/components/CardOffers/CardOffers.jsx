import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import * as PATHS from '../../utils/paths';
import './CardOffers.css';
import { CalendarOutlined, EnvironmentOutlined, EuroCircleOutlined } from '@ant-design/icons';

function CardOffer(props) {
  const { searchOffers } = props;
  const data = [searchOffers];
  const date = new Date(searchOffers.createdAt);

  return (
    <div className='ant-card-hoverable '>
      <Link to={PATHS.OFFERPAGE + '?id=' + searchOffers._id}>
        <p className='companyOffer'>{searchOffers.company}</p>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={(item) => (
            <List.Item className='cardOfferBorder'>
              <List.Item.Meta
                className='cardOfferBorderListItem'
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title={searchOffers.jobTitle}
                description={searchOffers.description}
              />
            </List.Item>
          )}
        />
        <p className='space cardOfferBorderListItem'>
          <span>
            <EnvironmentOutlined className='offerLogo' />
          </span>{' '}
          {searchOffers.province} | {searchOffers.salary}{' '}
          <span>
            <EuroCircleOutlined className='offerLogo' />
          </span>{' '}
          |
          <span>
            <CalendarOutlined className='offerLogo' />
          </span>{' '}
          {date.toLocaleDateString('es-ES')}{' '}
        </p>
      </Link>
    </div>
  );
}

export default CardOffer;
