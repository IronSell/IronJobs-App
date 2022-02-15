import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Typography, Button, Descriptions, Collapse, Tag, Skeleton } from 'antd'
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons'
import * as PATHS from '../../utils/paths'
import { getCompanyProfile, deleteCompany } from '../../services/companies'
import { removeUserToken } from '../../utils/userToken'
import './CompanyProfile.css'

function CompanyView(props) {
  const { user } = props

  const [company, setCompany] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const { Title } = Typography
  const { Panel } = Collapse

  useEffect(() => {
    getCompanyProfile(user._id).then((response) => {
      setCompany([response.data.showCompany])
      setIsLoading(false)
    })
  }, [user._id])

  function handleFormSubmission(e) {
    deleteCompany(user._id).then((res) => {
      navigate(PATHS.HOMEPAGE)
    })
  }

  return (
    <>
      {isLoading ? (
        <div className="container">
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </div>
      ) : (
        company.map((info, index) => (
          <main className="container">
            <div className="CompanyView">
              <div className="company-logo-container">
                <img
                  className="company-logo"
                  src={info.companyLogo}
                  alt={info.name}
                />
                <Title level={3}>{info.name}</Title>
                <form onSubmit={handleFormSubmission}>
                  <Button type="danger" htmlType="submit">
                    Delete Account
                  </Button>
                </form>
                <div className="logo-container"></div>
              </div>
              <div className="info-container">
                <Descriptions
                  title="Company info"
                  bordered
                  column={{ lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                  <Descriptions.Item label="Professional Sector">
                    {info.professionalSector}
                  </Descriptions.Item>
                  <Descriptions.Item label="CIF">{info.cif}</Descriptions.Item>
                  <Descriptions.Item label="Website" span={2}>
                    {info.companyUrl}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email" span={2}>
                    {info.email}
                  </Descriptions.Item>
                  <Descriptions.Item label="Province">
                    {info.province}
                  </Descriptions.Item>
                  <Descriptions.Item label="Address">
                    {info.address}
                  </Descriptions.Item>
                </Descriptions>
                <Collapse
                  className="company-description"
                  defaultActiveKey={['1']}
                >
                  <Panel header="Company description" key="1">
                    <p>{info.companyDescription}</p>
                  </Panel>
                </Collapse>
              </div>
              <div className="media-container">
                <Title level={3}>Social media</Title>
                <>
                  <a href={info.facebook} target="_blank" rel="noreferrer">
                    <Tag icon={<FacebookOutlined />} color="#3b5999">
                      Facebook
                    </Tag>
                  </a>
                  <a href={info.instagram} target="_blank" rel="noreferrer">
                    <Tag icon={<InstagramOutlined />} className="instagram">
                      Instagram
                    </Tag>
                  </a>
                  <a href={info.linkedIn} target="_blank" rel="noreferrer">
                    <Tag icon={<LinkedinOutlined />} color="#0e76a8">
                      LinkedIn
                    </Tag>
                  </a>
                </>
              </div>
              <div className="offers-container">
                <Title level={3}>Active job vacancies</Title>
                {info.jobOffers.map((offer, index) => offer.jobTitle)}
              </div>
            </div>
          </main>
        ))
      )}
    </>
  )
}

export default CompanyView
