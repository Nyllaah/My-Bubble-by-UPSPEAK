import '../styles/LoginSwitch.css';

export default function LoginSwitch() {
  return (
    <>
      <div id="login-btn-bg">
        <button
          id="log-in-swt"
          className="switch"
        >
          Log In

        </button>
        <button
          id="sign-in-swt"
          className="switch selected"
        >
          Sign In

        </button>
      </div>
      <hr />
    </>
  );
}
