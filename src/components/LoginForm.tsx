import Input from './Input';

export default function LoginForm() {
  return (
    <form id="log-in-form">
      <Input
        type="email"
        id="log-in-email-input"
        placeholder="Email"
        className="log-in-input"
        required
      />
      <Input
        type="password"
        placeholder="Password"
        id="log-in-password-input"
        className="log-in-input"
        required
      />
      <span id="forgotten-password">Forgot password?</span>
      <button type="submit" id="log-in-btn">Let’s go up!</button>
    </form>
  );
}
