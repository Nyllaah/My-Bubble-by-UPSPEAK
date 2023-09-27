import { InputTypes } from '../types';
import styles from '../styles/Input.module.css';

export default function Input({
  type, id, placeholder, className, required, value, onChange, name }: InputTypes) {
  return (
    <div className={ styles.inputContainer }>
      <input
        onChange={ onChange }
        value={ value }
        type={ type }
        id={ id }
        placeholder={ placeholder }
        className={ className }
        required={ required }
        name={ name }
      />
    </div>
  );
}
