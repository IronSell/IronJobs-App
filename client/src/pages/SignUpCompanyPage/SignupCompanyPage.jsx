import SignUpCompanyForm from '../../components/SignUpCompanyForm/SignUpCompanyForm';
import './SignupCompany.styles.css';

const SignupCompanyPage = () => {
  return (
    <>
      <header className='container SignupCompanyPage'>
        <h1>Welcome! Create your company account</h1>
      </header>
      <main>
        <SignUpCompanyForm />
      </main>
    </>
  );
};

export default SignupCompanyPage;
