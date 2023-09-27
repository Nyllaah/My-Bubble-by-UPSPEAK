export type InputTypes = {
  type: string,
  id: string,
  placeholder: string,
  className: string,
  required: boolean,
  value: string,
  name: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export type ButtonTypes = {
  innerText: string,
  onClick: () => void,
};

export type FormDataTypes = {
  name: string,
  countryCode: string,
  phoneNumber: string,
  email: string,
  password: string,
  confirmPwd: string,
};
