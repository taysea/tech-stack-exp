import React, { forwardRef } from "react";
import "./Button.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, onClick, ...rest }: ButtonProps, ref): JSX.Element => {
    const content = label;

    return (
      <button ref={ref} className="btn" onClick={onClick} {...rest}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
