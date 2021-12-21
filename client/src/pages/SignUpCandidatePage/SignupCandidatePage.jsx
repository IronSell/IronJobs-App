import SignUpCandidateForm from '../../components/SignUpCandidateForm/SignUpCandidateForm';
import './SignupCandidate.styles.css';

const SignupCandidatePage = () => {
  return (
    <>
    <header className='container SignupCandidatePage'>
      <h1>Create your account and start your new journey!</h1>
    </header>
    <main>
      <SignUpCandidateForm />
    </main>
    </>
  );
};

export default SignupCandidatePage;
