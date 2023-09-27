export type InputTypes = {
  type: string,
  id: string,
  placeholder: string,
  className: string,
  required: boolean,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export type ButtonTypes = {
  innerText: string,
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
};
