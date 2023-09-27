import { useDispatch, useSelector } from 'react-redux';
import { switchScreens } from '../redux/actions/loginActions';
import styles from '../styles/LoginSwitch.module.css';

export default function LoginSwitch() {
  const currScreen = useSelector((state) => state.currScreen);
  const dispatch = useDispatch();

  return (
    <>
      <div className={ styles.loginBtnBg }>
        <button
          className={ currScreen === 'login' ? styles.selected : styles.switch }
          onClick={ () => dispatch(switchScreens()) }
        >
          Log In

        </button>
        <button
          className={ currScreen === 'signin' ? styles.selected : styles.switch }
          onClick={ () => dispatch(switchScreens()) }
        >
          Sign In

        </button>
      </div>
      <hr />
    </>
  );
}
