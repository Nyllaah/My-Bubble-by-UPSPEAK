import Input from './Input';

export default function SignInForm() {
  return (
    <form id="sign-in-form">
      <Input
        type="text"
        id="sign-in-name-input"
        placeholder="Full name"
        className="sign-in-input"
        required
      />
      <div className="input-container">
        <select name="" id="country-codes" className="sign-in-input">
          <option value="+55">+55</option>
        </select>
        <input
          type="text"
          id="phone-input"
          placeholder="Phone number"
          className="sign-in-input"
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
      <button type="submit" id="sign-in-btn">Let’s go up!</button>
    </form>
  );
}
