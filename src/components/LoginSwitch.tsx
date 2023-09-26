import styles from '../styles/LoginSwitch.module.css';

export default function LoginSwitch() {
  return (
    <>
      <div className={ styles.loginBtnBg }>
        <button
          className={ styles.logInSwt }
        >
          Log In

        </button>
        <button
          className={ `${styles.signInSwt} selected` }
        >
          Sign In

        </button>
      </div>
      <hr />
    </>
  );
}
