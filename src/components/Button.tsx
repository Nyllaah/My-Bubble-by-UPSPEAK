import { ButtonTypes } from '../types';
import styles from '../styles/Button.module.css';

export default function Button({ innerText, onClick }: ButtonTypes) {
  return (
    <button
      onClick={ onClick }
      className={ styles.loginBtn }
      type="button"
    >
      {innerText}

    </button>
  );
}
