import { InputTypes } from '../types';
import styles from '../styles/Input.module.css';

export default function Input({
  type, id, placeholder, className, required }: InputTypes) {
  return (
    <div className={ styles.inputContainer }>
      <input
        type={ type }
        id={ id }
        placeholder={ placeholder }
        className={ className }
        required={ required }
      />
    </div>
  );
}
