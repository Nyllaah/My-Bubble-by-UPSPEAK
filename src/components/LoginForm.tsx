import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import styles from '../styles/LoginForm.module.css';
import Button from './Button';
import { users } from '../assets/userList';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formError, setFormError] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData, [name]: value,
    });
    setFormError(false);
  };

  const { email, password } = formData;
  const currUser = users.find((user) => email === user.email);

  const isUserValid = () => {
    const isEmailValid = users.some((user) => email === user.email);
    const isPwdValid = currUser?.password === password;
    return isEmailValid && isPwdValid;
  };

  const handleButton = () => {
    if (isUserValid()) {
      localStorage.setItem('userData', JSON.stringify(formData));
      navigate(`/home/${currUser?.userID}`);
    } else {
      setFormError(true);
    }
  };

  return (
    <form>
      <Input
        onChange={ handleChange }
        name="email"
        value={ formData.email }
        type="email"
        id="log-in-email-input"
        placeholder="Email"
        className={ styles.logInInput }
        required
      />
      <Input
        onChange={ handleChange }
        name="password"
        value={ formData.password }
        type="password"
        placeholder="Password"
        id="log-in-password-input"
        className="log-in-input"
        required
      />
      <span className={ styles.forgottenPwd }>Forgot password?</span>
      {formError && <p className={ styles.errorMsg }>User does not exist</p>}
      <Button innerText="Let’s go up!" onClick={ handleButton } />
    </form>
  );
}
