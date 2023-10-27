import React, { forwardRef } from "react";
import "./Button.css";

type ButtonProps = {
  icon?: React.ReactNode;
  kind?: "primary" | "secondary" | "tertiary" | string;
  label?: string;
  onClick: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, kind: kindProp, label, onClick, ...rest }: ButtonProps, ref): JSX.Element => {
    let kind = kindProp || "primary";
    let content;
    if (label && icon) {
      content = (
        <div className="flex gap-2">
          {icon}
          <span>{label}</span>
        </div>
      );
    } else if (label) {
      content = label; 
    }
    else if (icon) {
      kind = `${kind} iconOnly`;
      content = icon;
    } 
    
    return (
      <button ref={ref} className={`btn ${kind}`} onClick={onClick} {...rest}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
