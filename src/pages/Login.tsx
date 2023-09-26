import LoginForm from '../components/LoginForm';
import LoginSwitch from '../components/LoginSwitch';
import SignInForm from '../components/SignInForm';
import styles from '../styles/Login.module.css';

export default function Login() {
  // function selectScreen(e) {

  // }
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
          <SignInForm />
          {/* <LoginForm /> */}
        </section>
      </main>
    </div>
  );
}
