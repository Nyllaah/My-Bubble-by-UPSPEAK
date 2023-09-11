import { InputTypes } from '../types';

export default function Input({
  type, id, placeholder, className, required }: InputTypes) {
  return (
    <div className="input-container">
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
