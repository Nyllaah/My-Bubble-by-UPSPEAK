import Input from './Input';
import styles from '../styles/LoginForm.module.css';
import Button from './Button';

export default function LoginForm() {
  return (
    <form>
      <Input
        type="email"
        id="log-in-email-input"
        placeholder="Email"
        className={ styles.logInInput }
        required
      />
      <Input
        type="password"
        placeholder="Password"
        id="log-in-password-input"
        className="log-in-input"
        required
      />
      <span className={ styles.forgottenPwd }>Forgot password?</span>
      <Button innerText="Let’s go up!" />
    </form>
  );
}
