import { Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginCandidatePage from '../pages/LogInCandidatePage';
import LoginCompanyPage from '../pages/LoginCompanyPage';
import CompaniesPage from '../pages/CompaniesPage';
import SignupCandidate from '../pages/SignUpCandidatePage/SignupCandidatePage';
import SignupCompany from '../pages/SignUpCompanyPage/SignupCompanyPage';
import OffersJobPage from '../pages/OffersJobPage';
import CompanyPage from '../pages/CompanyPage';
import CompanyProfile from '../pages/CompanyProfile/CompanyProfile';
import OfferPage from '../pages/OfferPage';
import CandidatesPage from '../pages/CandidatesPage';
import CandidateProfile from '../pages/CandidateProfilePage/CandidateProfilePage';
import * as PATHS from '../utils/paths';

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.OFFERSJOBPAGE,
      element: <OffersJobPage {...props} />,
    },
    {
      path: PATHS.OFFERPAGE,
      element: <OfferPage {...props} />,
    },
    {
      path: PATHS.COMPANYPAGE,
      element: <CompanyPage {...props} />,
    },
    {
      path: PATHS.COMPANIESPAGE,
      element: <CompaniesPage {...props} />,
    },
    {
      path: PATHS.CANDIDATESPAGE,
      element: <CandidatesPage {...props} />,
    },
    {
      path: PATHS.CANDIDATEPROFILE,
      element: user ? (
        <CandidateProfile {...props} />
      ) : (
        <Navigate to={PATHS.HOMEPAGE} replace />
      ),
    },
    {
      path: PATHS.COMPANYPROFILE,
      element: user ? (
        <CompanyProfile {...props} />
      ) : (
        <Navigate to={PATHS.HOMEPAGE} replace />
      ),
    },
    {
      path: PATHS.SIGNUPCANDIDATEPAGE,
      element: <SignupCandidate {...props} />,
    },
    {
      path: PATHS.SIGNUPCOMPANYPAGE,
      element: <SignupCompany {...props} />,
    },
    {
      path: PATHS.LOGINCANDIDATEPAGE,
      element: <LoginCandidatePage {...props} />,
    },
    {
      path: PATHS.LOGINCOMPANYPAGE,
      element: <LoginCompanyPage {...props} />,
    },
  ];
};

export default routes;