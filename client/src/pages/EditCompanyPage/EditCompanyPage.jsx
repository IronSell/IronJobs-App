import EditCompanyProfile from '../../components/EditCompanyProfile/EditCompanyProfile';
import '../SignUpCompanyPage/SignupCompany.styles.css';

const EditCompanyPage = (props) => {
  const {user} = props

  return (
    <>
      <main>
        <EditCompanyProfile user={user}/>
      </main>
    </>
  );
};

export default EditCompanyPage;