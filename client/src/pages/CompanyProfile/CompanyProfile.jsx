import { getCompanyProfile } from '../../services/companies';
import { useEffect } from 'react';
import CompanyView from '../../components/CompanyProfile/CompanyView';

const CompanyProfile = (props) => {
  const { user } = props;

  useEffect(() => {
    getCompanyProfile(user._id)
  })
  
  return (
    <div>
      <CompanyView user={user} />
    </div>
  );
};

export default CompanyProfile;
