import './CandidateView.styles.css';
import {
  Image,
  Typography,
  Anchor,
  Text,
  Descriptions,
  Collapse,
  Divider,
} from 'antd';
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

function CandidateView(props) {
  const {
    name,
    lastName,
    email,
    birth,
    telephoneNumber,
    postalCode,
    province,
    profilePicture,
    profession,
    professionalProfiles,
    professionalExperience,
  } = props.user;

  const date = new Date(birth)

  const { Title, Text } = Typography;

  return (
    <main className='container'>
      <div className='CandidateView'>
        <div className='candidate-logo-container'>
          <img className='candidate-logo' src={profilePicture} alt={name + '' + lastName} />
          <Title level={3}>{name} {lastName}</Title>
          <div className='logo-container'></div>
        </div>
        <div className='info-container'>
          <Descriptions
            title='My personal data'
            bordered
            column={{ lg: 3, md: 2, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label='Email'>
              {email}
            </Descriptions.Item>
            <Descriptions.Item label='Telephone number'>{telephoneNumber}</Descriptions.Item>
            <Descriptions.Item label='Birth'>
              {date.toLocaleDateString('es-ES')}
            </Descriptions.Item>
            <Descriptions.Item label='Profession'>
              {profession}
            </Descriptions.Item>
            <Descriptions.Item label='Province'>{province}</Descriptions.Item>
            <Descriptions.Item label='Postal code'>{postalCode}</Descriptions.Item>
            <Descriptions.Item label='Professional Experience'>{postalCode}</Descriptions.Item>
          </Descriptions>
        </div>
        <div className='media-container'>
          <Title level={3}>Social media</Title>
          <Divider />
          <Text>
            <LinkedinOutlined /> /quimiromar
          </Text>
          <Divider />
          <Text>
            <FacebookOutlined />
            quimiromar
          </Text>
          <Divider />
          <Text>
            <InstagramOutlined /> @quimiromar
          </Text>
        </div>
        <div className='offers-container'>
          <Title level={3}>Applied job offers</Title>
          {professionalExperience}
        </div>
      </div>
    </main>
  )
}

export default CandidateView;
