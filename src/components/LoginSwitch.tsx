import styles from '../styles/LoginSwitch.module.css';

type LoginSwitchProps = {
  loginScreen: boolean,
  setLoginScreen: () => void
};

export default function LoginSwitch({ loginScreen, setLoginScreen }: LoginSwitchProps) {
  const handleSwitch = () => {
    setLoginScreen(!loginScreen);
  };

  return (
    <>
      <div className={ styles.loginBtnBg }>
        <button
          className={ loginScreen ? styles.selected : styles.switch }
          onClick={ handleSwitch }
        >
          Log In

        </button>
        <button
          className={ !loginScreen ? styles.selected : styles.switch }
          onClick={ handleSwitch }
        >
          Sign In

        </button>
      </div>
      <hr />
    </>
  );
}
