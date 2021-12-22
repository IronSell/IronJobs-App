import EditCompanyProfile from '../../components/EditCompanyProfile/EditCompanyProfile';
import '../SignUpCompanyPage/SignupCompany.styles.css';

const EditCompanyPage = (props) => {
  const { user, authenticate } = props;

  return (
    <>
      <main>
        <EditCompanyProfile user={user} authenticate={authenticate} />
      </main>
    </>
  );
};

export default EditCompanyPage;
