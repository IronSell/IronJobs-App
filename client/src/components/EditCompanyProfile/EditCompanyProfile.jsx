import '../SignUpCompanyForm/SignUpCompanyForm.styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateCompanyProfile } from '../../services/companies';
import * as PATHS from '../../utils/paths';
import { Input, Button } from 'antd';

const EditCompanyProfile = (props) => {
  const { _id } = props.user;

  const { TextArea } = Input;
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    professionalSector: '',
    cif: '',
    address: '',
    province: '',
    companyUrl: '',
    companyDescription: '',
    linkedIn: '',
    facebook: '',
    instagram: '',
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
    companyDescription,
    linkedIn,
    facebook,
    instagram,
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
      companyDescription,
      linkedIn,
      facebook,
      instagram,
    };
    updateCompanyProfile(_id, companyAccount).then((res) => {
      if (!res.status) {
        return setError({ message: 'There was an error updating the profile' });
      }
      navigate(PATHS.COMPANYPROFILE);
    });
  }

  return (
    <>
      <div className='container signup-form'>
        <form onSubmit={handleFormSubmission} className='auth__form'>
          <h1 className='form-titles'>Your company data</h1>
          <hr />
          <div className='form-input'>
            <p className='form-input-title'>Company name</p>
            <Input
              id='input-email'
              type='text'
              name='email'
              placeholder='Company email'
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <p className='form-input-title'>Company name</p>
            <Input
              id='input-password'
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <p className='form-input-title'>Company name</p>
            <Input
              id='input-name'
              type='text'
              name='name'
              placeholder='Company name'
              value={name}
              onChange={handleInputChange}
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
          <p className='form-input-title'>Website</p>
          <div className='form-input'>
            <Input
              id='input-companyUrl'
              type='url'
              name='companyUrl'
              placeholder='Company website'
              value={companyUrl}
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
          <p className='form-input-title'>Company description</p>
          <div className='form-input'>
            <TextArea
              rows={4}
              id='companyDescription'
              type='text'
              name='companyDescription'
              placeholder='companyDescription'
              value={companyDescription}
              onChange={handleInputChange}
            />
          </div>
          <Button type='primary' htmlType={handleFormSubmission}>
            Edit Account
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditCompanyProfile;
