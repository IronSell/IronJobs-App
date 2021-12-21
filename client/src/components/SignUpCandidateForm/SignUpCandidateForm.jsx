import './SignUpCandidate.styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/auth';
import * as PATHS from '../../utils/paths';
import { Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const SignUpCandidateForm = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    birth: '',
    telephoneNumber: '',
    province: '',
    postalCode: '',
  });

  const {
    name,
    lastName,
    email,
    password,
    birth,
    telephoneNumber,
    province,
    postalCode,
  } = form;

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    const candidateAccount = {
      name,
      lastName,
      email,
      password,
      birth,
      telephoneNumber,
      province,
      postalCode,
    };
    signup(candidateAccount).then((res) => {
      if (!res.status) {
        return setError({ message: 'There was an error creating the account' });
      }
      navigate(PATHS.LOGINCANDIDATEPAGE);
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
          <p className='form-titles'>Your personal data</p>
          <hr />
          <div className='form-input'>
            <p className='form-input-title'>Name</p>
            <Input
              id='input-name'
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-input'>
            <p className='form-input-title'>Last name</p>
            <Input
              id='input-lastName'
              type='text'
              name='lastName'
              placeholder='Last name'
              value={lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <p className='form-input-title'>Date of birth</p>
          <div className='form-input'>
            <Input
              id='input-birth'
              type='date'
              name='birth'
              placeholder='Date of birth'
              value={birth}
              onChange={handleInputChange}
              required={true}
            />
          </div>
          <p className='form-input-title'>Telephone number</p>
          <div className='form-input'>
            <Input
              id='input-telephoneNumber'
              type='tel'
              name='telephoneNumber'
              placeholder='Telephone Number'
              value={telephoneNumber}
              onChange={handleInputChange}
              required={true}
              maxLength={9}
            />
          </div>
          <p className='form-input-title'>Postal Code</p>
          <div className='form-input'>
            <Input
              id='input-postalCode'
              type='text'
              name='postalCode'
              placeholder='Postal Code'
              value={postalCode}
              onChange={handleInputChange}
              required={true}
              maxLength={5}
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
              required={true}
            />
          </div>
          <Button type='primary' htmlType='submit'>
            Create Account
          </Button>
          <p className='form-titles-centered'>
            After that you can start looking for your desired job!
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpCandidateForm;
