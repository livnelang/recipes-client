import "./TextArea.css";
import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  placeholder: string;
}

const TextArea = (props: TextAreaProps) => {
  const { name, label, ...rest } = props;

  return (
    <textarea className="TextArea" name={name} cols={30} {...rest}></textarea>
  );
};

export default TextArea;
