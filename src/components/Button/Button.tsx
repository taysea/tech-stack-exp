import { forwardRef } from "react";
import "./Button.css";

type ButtonProps = {
  kind?: "primary" | "secondary";
  label: string;
  onClick: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ kind, label, onClick, ...rest }: ButtonProps, ref): JSX.Element => {
    const content = label;

    return (
      <button ref={ref} className={`btn ${kind}`} onClick={onClick} {...rest}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
