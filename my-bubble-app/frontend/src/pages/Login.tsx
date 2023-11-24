import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import LoginSwitch from '../components/LoginSwitch';
import SignInForm from '../components/SignInForm';
import styles from '../styles/Login.module.css';
import { SwitchScreenType } from '../assets/types';

export default function Login() {
  const currScreen = useSelector(
    (state: SwitchScreenType) => state.switchScreen.currScreen,
  );

  return (
    <div className={ styles.container }>
      <header>
        <LoginSwitch />
      </header>
      <main>
        <section className={ styles.titleContainer }>
          <h1>Welcome to UPSPEAK®!</h1>
          <span>Get started in only a few minutes:</span>
        </section>
        <section>
          {currScreen === 'login' ? <LoginForm /> : <SignInForm />}
        </section>
      </main>
    </div>
  );
}
