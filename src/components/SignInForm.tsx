import Button from './Button';
import Input from './Input';
import styles from '../styles/SignInForm.module.css';
import { countryCodes } from '../country-codes';

export default function SignInForm() {
  return (
    <form className={ styles.form }>
      <Input
        type="text"
        id="sign-in-name-input"
        placeholder="Full name"
        className="sign-in-input"
        required
      />
      <div className={ styles.inputContainer }>
        <select name="country-code" id="counry-codes" className="sign-in-input">

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
          type="text"
          id="phone-input"
          placeholder="Phone number"
          className={ styles.phoneInput }
          required
        />
      </div>
      <Input
        type="email"
        id="sign-in-email-input"
        placeholder="Email"
        className="sign-in-input"
        required
      />
      <Input
        type="password"
        placeholder="Password"
        id="sign-in-password-input"
        className="sign-in-input"
        required
      />
      <Input
        type="password"
        id="sign-in-corfirm-password-input"
        placeholder="Confirm password"
        className="sign-in-input"
        required
      />
      <Button innerText="Let’s go up!" />
    </form>
  );
}
