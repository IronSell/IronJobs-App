import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoadingComponent from './components/Loading';
import Navbar from './components/Navbar/Navbar';
import {
  getLoggedIn,
  logout,
  getCompanyLoggedIn,
  logoutCompany,
} from './services/auth';
import routes from './config/routes';
import * as PATHS from './utils/paths';
import * as USER_HELPERS from './utils/userToken';
import Footer from './components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getCompanyLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        console.error('Logout was unsuccessful: ', res);
      }
      navigate(PATHS.HOMEPAGE);
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function handleLogoutCompany() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logoutCompany(accessToken).then((res) => {
      if (!res.status) {
        console.error('Logout was unsuccessful: ', res);
      }
      navigate(PATHS.HOMEPAGE);
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className='App'>
      <Navbar
        handleLogout={handleLogout}
        user={user}
        handleLogoutCompany={handleLogoutCompany}
      />

      <Routes>
        {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
