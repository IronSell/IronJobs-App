import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as PATHS from '../../utils/paths';
import { Button } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from './../../context/theme.context';

const Navbar = (props) => {
  const { user, handleLogout, handleLogoutCompany } = props;

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`Navbar ${theme}`}>
      <div className='container'>
      <ul>
        <div className='links'>
        <li>
          <Link to={PATHS.HOMEPAGE} className='nav__projectName'>
            IronJob
          </Link>
        </li>
        <li>
          <Link to={PATHS.OFFERSJOBPAGE} className='OfferAndCompanyColor'>
            Offers
          </Link>
        </li>
        <li>
          <Link to={PATHS.COMPANIESPAGE} className='OfferAndCompanyColor'>
            Companies
          </Link>
        </li>
        </div>
        <div className='access-buttons'>
        {user ? (
          <>
            {user.isCompany ? (
              <>
                <li>
                  <Link
                    to={PATHS.CANDIDATESPAGE}
                    className='OfferAndCompanyColor'
                  >
                    Search Candidates
                  </Link>
                </li>
                <li>
                  <Link
                    to={PATHS.COMPANYPROFILE}
                    className='OfferAndCompanyColor'
                  >
                    {user.name}
                  </Link>
                </li>
                <li>
                  <Link
                    to={PATHS.EDITCOMPANYPAGE}
                    className='OfferAndCompanyColor'
                  >
                    Edit profile
                  </Link>
                </li>
                <li>
                  <Button type='primary' onClick={handleLogoutCompany}>
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={PATHS.CANDIDATEPROFILE} className='authLink'>
                    {user.name} {user.lastName}
                  </Link>
                </li>
                <li>
                  <Link
                    to={PATHS.EDITCANDIDATEPROFILE}
                    className='OfferAndCompanyColor'
                  >
                    Edit profile
                  </Link>
                </li>
                <li>
                  <Button type='primary' onClick={handleLogout}>
                    Logout
                  </Button>
                </li>
              </>
            )}
          </>
        ) : (
          <>
            <li>
              <Link to={PATHS.LOGINCOMPANYPAGE} className='authLink'>
                Company Access
              </Link>
            </li>
            <li>
              <Link to={PATHS.LOGINCANDIDATEPAGE} className='authLink'>
                Candidates Access
              </Link>
            </li>
          </>
        )}
        {/* -----dark mode */}
        <li>
          <button className='theme-btn' onClick={toggleTheme}>
            {theme === 'light' ? 'dark ' : 'light '}
          </button>
        </li>
        </div>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
