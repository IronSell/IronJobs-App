import '../components/CompanyProfile/CompanyProfile.css';
import { useState, useEffect } from 'react';
import { getCompany } from '../services/companies';
import {
  Typography,
  Descriptions,
  Collapse,
  Tag,
} from 'antd';

import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const CompanyPage = () => {
  const [company, setCompany] = useState([]);
  const { Title } = Typography;
  const { Panel } = Collapse;
  let urlStr = window.location.href;
  let url = new URL(urlStr);
  let search_params = url.searchParams;
  let id = search_params.get('id');

  useEffect(() => {
    getCompany(id).then((response) => {
      setCompany(response.data.showCompany);
    });
  }, []);

  return (
    <main className='container'>
    <div className='CompanyView'>
      <div className='company-logo-container'>
        <img
          className='company-logo'
          src={company.companyLogo}
          alt={company.name}
        />
        <Title level={3}>{company.name}</Title>
        <div className='logo-container'></div>
      </div>
      <div className='info-container'>
        <Descriptions
          title='Company info'
          bordered
          column={{ lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label='Professional Sector'>
            {company.professionalSector}
          </Descriptions.Item>
          <Descriptions.Item label='CIF'>{company.cif}</Descriptions.Item>
          <Descriptions.Item label='Website' span={2}>
            {company.companyUrl}
          </Descriptions.Item>
          <Descriptions.Item label='Email' span={2}>
            {company.email}
          </Descriptions.Item>
          <Descriptions.Item label='Province'>
            {company.province}
          </Descriptions.Item>
          <Descriptions.Item label='Address'>
            {company.address}
          </Descriptions.Item>
        </Descriptions>
        <Collapse
          className='company-description'
          defaultActiveKey={['1']}
        >
          <Panel header='Company description' key='1'>
            <p>{company.companyDescription}</p>
          </Panel>
        </Collapse>
      </div>
      <div className='media-container'>
        <Title level={3}>Social media</Title>
        <>
          <a href={company.facebook} target='_blank' rel='noreferrer'>
            <Tag icon={<FacebookOutlined />} color='#3b5999'>
              Facebook
            </Tag>
          </a>
          <a href={company.instagram} target='_blank' rel='noreferrer'>
            <Tag icon={<InstagramOutlined />} className='instagram'>
              Instagram
            </Tag>
          </a>
          <a href={company.linkedIn} target='_blank' rel='noreferrer'>
            <Tag icon={<LinkedinOutlined />} color='#0e76a8'>
              LinkedIn
            </Tag>
          </a>
        </>
      </div>
    </div>
  </main>
  );
};

export default CompanyPage;


