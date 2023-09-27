import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import styles from '../styles/SignInForm.module.css';
import { countryCodes } from '../country-codes';
import { FormDataTypes } from '../types';

export default function SignInForm() {
  const navigate = useNavigate();
  const [formError, setFormError] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    name: '',
    countryCode: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPwd: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData, [name]: value,
    });
    setFormError(false);
  };

  const isFormValid = () => {
    const { name, email, password, confirmPwd } = formData;
    return (name.length >= 5
      && (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)
      && (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/).test(password)
      && password === confirmPwd);
  };

  const handleButton = () => {
    if (isFormValid()) {
      localStorage.setItem('userData', JSON.stringify(formData));
      navigate('/home');
    } else {
      setFormError(true);
    }
  };

  return (
    <form className={ styles.form }>
      <Input
        onChange={ handleChange }
        value={ formData.name }
        name="name"
        type="text"
        id="sign-in-name-input"
        placeholder="Full name"
        className="sign-in-input"
        required
      />
      <div className={ styles.inputContainer }>
        <select
          value={ formData.countryCode }
          name="countryCode"
          id="country-codes"
          className="sign-in-input"
          defaultValue="+55"
        >

          {countryCodes.map((country: { code: string, name: string }) => {
            const { code, name } = country;
            return (
              <optgroup key={ name } label={ name }>
                <option value={ code }>{code}</option>
              </optgroup>
            );
          })}
        </select>
        <input
          onChange={ handleChange }
          type="text"
          id="phone-input"
          placeholder="Phone number"
          className={ styles.phoneInput }
          value={ formData.phoneNumber }
          name="phoneNumber"
        />
      </div>
      <Input
        onChange={ handleChange }
        value={ formData.email }
        name="email"
        type="email"
        id="sign-in-email-input"
        placeholder="Email"
        className="sign-in-input"
        required
      />
      <Input
        onChange={ handleChange }
        value={ formData.password }
        name="password"
        type="password"
        placeholder="Password"
        id="sign-in-password-input"
        className="sign-in-input"
        required
      />
      <Input
        onChange={ handleChange }
        value={ formData.confirmPwd }
        name="confirmPwd"
        type="password"
        id="sign-in-corfirm-password-input"
        placeholder="Confirm password"
        className="sign-in-input"
        required
      />
      {formError && (
        <div className={ styles.errorMsg }>
          <ul>
            <li>Full name, email and password are mandatories.</li>
            <li>
              Your password must have at least 6 characters,
              containing letters, numbers and special characters.
            </li>
          </ul>
        </div>
      )}
      <Button innerText="Let’s go up!" onClick={ handleButton } />
    </form>
  );
}
