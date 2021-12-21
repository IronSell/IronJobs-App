import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import * as PATHS from '../../utils/paths';

const { Meta } = Card;

// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

function CardCompanyByUser(props) {
  const {
    name,
    companyUrl,
    companyLogo,
    companyDescription,
    professionalSector,
    address,
    province,
  } = props.showCompany;
  return (
    <div className='CardCompany'>
      <Card style={{ width: 1000, marginTop: 16 }}>
        <Meta
          avatar={<Avatar className='Avatar' src={companyLogo} />}
          title={name}
        />
        <p>{professionalSector}</p>
        <p>{companyDescription}</p>
        <p>{companyUrl}</p>
        <p>
          {address},{province}
        </p>
        <p></p>
        <p></p>

        <Link to={PATHS.COMPANYPAGE}>MORE INFO</Link>
        {/* <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />, */}
      </Card>
    </div>
  );
}

export default CardCompanyByUser;
