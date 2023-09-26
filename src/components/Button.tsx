import { ButtonTypes } from '../types';
import styles from '../styles/Button.module.css';

export default function Button({ innerText }: ButtonTypes) {
  return (
    <button
      className={ styles.loginBtn }
      type="submit"
    >
      {innerText}

    </button>
  );
}
