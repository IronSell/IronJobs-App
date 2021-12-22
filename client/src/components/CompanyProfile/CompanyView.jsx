import './CompanyProfile.css';
import {
  Image,
  Typography,
  Anchor,
  Descriptions,
  Collapse,
  Divider,
  Tag,
} from 'antd';
import {
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

function CompanyView(props) {
  const {
    name,
    email,
    professionalSector,
    cif,
    address,
    companyDescription,
    province,
    companyUrl,
    companyLogo,
    jobOffers,
    linkedIn,
    instagram,
    facebook
  } = props.user;

  const { Title } = Typography;
  const { Panel } = Collapse;
  const text = companyDescription;
  const { Link } = Anchor;
 
  return (
    <main className='container'>
      <div className='CompanyView'>
        <div className='company-logo-container'>
          <img className='company-logo' src={companyLogo} alt={name} />
          <Title level={3}>{name}</Title>
          <div className='logo-container'></div>
        </div>
        <div className='info-container'>
          <Descriptions
            title='Company info'
            bordered
            column={{ lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label='Professional Sector'>
              {professionalSector}
            </Descriptions.Item>
            <Descriptions.Item label='CIF'>{cif}</Descriptions.Item>
            <Descriptions.Item label='Website' span={2}>
              {companyUrl}
            </Descriptions.Item>
            <Descriptions.Item label='Email' span={2}>
              {email}
            </Descriptions.Item>
            <Descriptions.Item label='Province'>{province}</Descriptions.Item>
            <Descriptions.Item label='Address'>{address}</Descriptions.Item>
          </Descriptions>
          <Collapse className='company-description' defaultActiveKey={['1']}>
            <Panel header='Company description' key='1'>
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
        <div className='media-container'>
          <Title level={3}>Social media</Title>

          <>
          {/* <Divider /> */}
          <a href={facebook} target="_blank" rel='noreferrer'>
          <Tag icon={<FacebookOutlined />} color="#3b5999">
            Facebook
          </Tag></a> 

          <a href={instagram}  target="_blank" rel='noreferrer'>
          <Tag icon={<InstagramOutlined />} className='instagram' >
            Instagram
          </Tag></a>

          <a href={linkedIn} target="_blank" rel='noreferrer'>
          <Tag icon={<LinkedinOutlined />} color="#0e76a8">
            LinkedIn
          </Tag></a>
          </>
        </div>
        <div className='offers-container'>
          <Title level={3}>Active job vacancies</Title>
          {jobOffers}
        </div>
      </div>
    </main>
  );
}

export default CompanyView;
