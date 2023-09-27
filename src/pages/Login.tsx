// import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import LoginSwitch from '../components/LoginSwitch';
import SignInForm from '../components/SignInForm';
import styles from '../styles/Login.module.css';

export default function Login() {
  // const [loginScreen, setLoginScreen] = useState(true);
  const currScreen = useSelector((state) => state.currScreen);

  return (
    <div className={ styles.container }>
      <header>
        <LoginSwitch /* loginScreen={ loginScreen } setLoginScreen={ setLoginScreen } */ />
      </header>
      <main>
        <section className={ styles.titleContainer }>
          <h1>Welcome to UPSPEAK®!</h1>
          <span>Get started in only a few minutes:</span>
        </section>
        <section>
          {/* loginScreen */currScreen === 'login' ? <LoginForm /> : <SignInForm />}
        </section>
      </main>
    </div>
  );
}
