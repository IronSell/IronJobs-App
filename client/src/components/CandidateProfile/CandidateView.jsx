import './CandidateView.styles.css';
import { useState } from 'react';
import { Typography, Descriptions, Divider, Modal, Button } from 'antd';
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
    appliedJobs,
  } = props.user;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const birthDate = new Date(birth);

  const { Title, Text } = Typography;

  return (
    <main className='container'>
      <div className='CandidateView'>
        <section className='candidate-logo-container'>
          <img
            className='candidate-logo'
            src={profilePicture}
            alt={name + '' + lastName}
          />
          <Title level={3}>
            {name} {lastName}
          </Title>
          <div className='logo-container'></div>
        </section>
        <div>
          <section className='info-container'>
            <Descriptions
              title='My personal data'
              bordered
              column={{ lg: 3, md: 2, sm: 1, xs: 1 }}
            >
              <Descriptions.Item label='Email'>{email}</Descriptions.Item>
              <Descriptions.Item label='Telephone number'>
                {telephoneNumber}
              </Descriptions.Item>
              <Descriptions.Item label='Date of birth'>
                {birthDate.toLocaleDateString('es-ES')}
              </Descriptions.Item>
              <Descriptions.Item label='Profession'>
                {profession}
              </Descriptions.Item>
              <Descriptions.Item label='Province'>{province}</Descriptions.Item>
              <Descriptions.Item label='Postal code'>
                {postalCode}
              </Descriptions.Item>
            </Descriptions>
          </section>
          <div className='professional-experience'>
            <Title level={3}>Professional experience</Title>
            <section>
              {professionalExperience.map((job, index) => (
                <div className='professional-experience-info'>
                  <Text level={4}>{job.jobTitle}</Text>
                  <Text>{job.companyName}</Text>
                  <Text>
                    {new Date(job.startDate).toLocaleDateString('es-ES')}
                  </Text>
                  <span>-</span>
                  {job.endDate ? (
                    <Text>
                      {new Date(job.endDate).toLocaleDateString('es-ES')}
                    </Text>
                  ) : (
                    <Text>Present</Text>
                  )}
                  <Button type='default' onClick={showModal}>
                    See details
                  </Button>
                  <Modal
                    title={job.jobTitle}
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Text level={4}>{job.jobDescription}</Text>
                  </Modal>
                </div>
              ))}
              {/* <Link to={}></Link> */}
            </section>
          </div>
        </div>

        <section className='media-container'>
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
        </section>
        <section className='offers-container'>
          <Title level={3}>Applied job offers</Title>
          {appliedJobs.map((appliedJob, index) => (
            <Text>{appliedJob.jobTitle}</Text>
          ))}
        </section>
      </div>
    </main>
  );
}

export default CandidateView;
