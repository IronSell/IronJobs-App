import CompanyView from '../../components/CompanyProfile/CompanyView';

const CompanyProfile = ({user}) => {

  return (
    <div>
      <CompanyView user={user} />
    </div>
  );
};

export default CompanyProfile;
