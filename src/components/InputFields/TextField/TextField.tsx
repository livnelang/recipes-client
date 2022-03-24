import { InputHTMLAttributes } from "react";
import "./TextField.css";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder: string;
}

const TextField = (props: TextFieldProps) => {
  const { name, label, ...rest } = props;
  return (
    <div className="TextField">
      {label === undefined ? null : <label htmlFor={name}>{label}</label>}
      <input type="text" {...rest} />
    </div>
  );
};

export default TextField;
