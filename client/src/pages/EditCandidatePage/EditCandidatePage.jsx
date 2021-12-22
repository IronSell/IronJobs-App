
import EditCandidateProfile from '../../components/EditCandidateProfile/EditCandidateProfile';
import '../SignUpCompanyPage/SignupCompany.styles.css';

const EditCandidatePage = (props) => {
  const { user, authenticate } = props;
  
  return (
    <>
      <main>
        <EditCandidateProfile user={user} authenticate={authenticate} />
      </main>
    </>
  );
};

export default EditCandidatePage;