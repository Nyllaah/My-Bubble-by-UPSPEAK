/* eslint-disable react/jsx-max-depth */
import LoginForm from '../components/LoginForm';
import LoginSwitch from '../components/LoginSwitch';
import SignInForm from '../components/SignInForm';

export default function Login() {
  return (
    <>
      <header>
        <LoginSwitch />
      </header>
      <main>
        <section id="title-container">
          <h1>Welcome to UPSPEAK®!</h1>
          <span>Get started in only a few minutes:</span>
        </section>
        <SignInForm />
        <LoginForm />
      </main>
    </>
  );
}
