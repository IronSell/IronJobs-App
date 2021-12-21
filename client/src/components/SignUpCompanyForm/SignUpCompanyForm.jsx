import './SignUpCompanyForm.styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupCompany } from '../../services/auth';
import * as PATHS from '../../utils/paths';
import { Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const SignUpForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    professionalSector: '',
    cif: '',
    address: '',
    province: '',
    companyUrl: '',
  });

  const {
    name,
    email,
    password,
    professionalSector,
    cif,
    address,
    province,
    companyUrl,
  } = form;

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    const companyAccount = {
      name,
      email,
      password,
      professionalSector,
      cif,
      address,
      province,
      companyUrl,
    };
    signupCompany(companyAccount).then((res) => {
      if (!res.status) {
        return setError({ message: 'There was an error creating the account' });
      }
      navigate(PATHS.LOGINCOMPANYPAGE);
    });
  }

  return (
    <>
      <div className='container signup-form'>
        <form onSubmit={handleFormSubmission} className='auth__form'>
          <p className='form-titles'>IronJobs access data</p>
          <hr />
          <div className='form-input'>
            <Input
              prefix={<MailOutlined className='site-form-item-icon' />}
              id='input-email'
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-input'>
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon' />}
              id='input-password'
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={handleInputChange}
              required={true}
            />
            <p className='password-instructions'>
              Your password must be a combination of at least 8 numbers,
              lowercase and uppercase letters.{' '}
            </p>
          </div>
          <p className='form-titles'>Your company data</p>
          <hr />
          <div className='form-input'>
            <p className='form-input-title'>Company name</p>
            <Input
              id='input-name'
              type='text'
              name='name'
              placeholder='Company name'
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <p className='form-input-title'>CIF</p>
          <div className='form-input'>
            <Input
              id='input-cif'
              type='text'
              name='cif'
              placeholder='C.I.F'
              value={cif}
              onChange={handleInputChange}
              required={true}
              minLength={9}
            />
          </div>
          <p className='form-input-title'>Professional Sector</p>
          <div className='form-input'>
            <Input
              id='input-professionalSector'
              type='text'
              name='professionalSector'
              placeholder='Professional Sector'
              value={professionalSector}
              onChange={handleInputChange}
              required
            />
          </div>
          <p className='form-input-title'>Address</p>
          <div className='form-input'>
            <Input
              id='input-address'
              type='text'
              name='address'
              placeholder='Company Address'
              value={address}
              onChange={handleInputChange}
              required
            />
          </div>
          <p className='form-input-title'>Province</p>
          <div className='form-input'>
            <Input
              id='input-province'
              type='text'
              name='province'
              placeholder='Province'
              value={province}
              onChange={handleInputChange}
              required
            />
          </div>
          <p className='form-input-title'>Website</p>
          <div className='form-input'>
            <Input
              id='input-companyUrl'
              type='url'
              name='companyUrl'
              placeholder='Company website'
              value={companyUrl}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button type='primary' htmlType='submit'>
            Create Account
          </Button>
          <p className='form-titles-centered'>
            Then you can publish your first job offer!
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
