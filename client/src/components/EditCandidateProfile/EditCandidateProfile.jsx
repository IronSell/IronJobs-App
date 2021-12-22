import '../SignUpCandidateForm/SignUpCandidate.styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/auth';
import * as PATHS from '../../utils/paths';
import { Input, Button } from 'antd';


const EditCandidateProfile = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    birth: '',
    telephoneNumber: '',
    province: '',
    postalCode: '',
    profession: '',
    linkedIn: '',
    facebook: '',
    instagram: '',
    studiesLevel: '',
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
    profession,
    linkedIn,
    facebook,
    instagram,
    studiesLevel,
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
      profession,
      linkedIn,
      facebook,
      instagram,
      studiesLevel,
    };
    signup(candidateAccount).then((res) => {
      if (!res.status) {
        return setError({ message: 'There was an error creating the account' });
      }
      navigate(PATHS.CANDIDATEPROFILE);
    });
  }

  return (
    <>
      <div className='container signup-form'>
        <form onSubmit={handleFormSubmission} className='auth__form'>
          <h1 className='form-titles'>Your profile data</h1>
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
            />
          </div>
          <p className='form-input-title'>Profession</p>
          <div className='form-input'>
            <Input
              id='input-profession'
              type='text'
              name='profession'
              placeholder='profession'
              value={profession}
              onChange={handleInputChange}
            />
          </div>
          <p className='form-input-title'>Studies-level</p>
          <div className='form-input'>
            <Input
              id='input-studiesLevel'
              type='text'
              name='studiesLevel'
              placeholder='studiesLevel'
              value={studiesLevel}
              onChange={handleInputChange}
            />
          </div>
          <p className='form-input-title'>Social-media</p>
          <div className='form-input'>
            <Input
              id='linkedIn'
              type='url'
              name='linkedIn'
              placeholder='linkedIn'
              value={linkedIn}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <Input
              id='facebook'
              type='url'
              name='facebook'
              placeholder='facebook'
              value={facebook}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <Input
              id='instagram'
              type='url'
              name='instagram'
              placeholder='instagram'
              value={instagram}
              onChange={handleInputChange}
            />
          </div>
          <Button type='primary' htmlType='submit'>
            Edit Account
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditCandidateProfile;