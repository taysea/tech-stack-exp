import { createElement, forwardRef } from "react";
import "./Heading.css";

type HeadingProps = {
  children?: string;
  level?: number;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level = 1, ...rest }: HeadingProps, ref): JSX.Element => {
    const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
      createElement(`h${level}`, { ...props, ref }, children);
    return <Heading className={`h${level}`} {...rest} />;
  }
);

Heading.displayName = "Heading";

export { Heading };
