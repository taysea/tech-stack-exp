import { InputHTMLAttributes, forwardRef } from "react";
import "./TextInput.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ ...rest }: TextInputProps, ref): JSX.Element => {
    return <input ref={ref} className="textinput" {...rest} />;
  }
);

TextInput.displayName = "TextInput";

export { TextInput };
