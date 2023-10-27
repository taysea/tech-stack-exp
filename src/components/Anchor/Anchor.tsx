import { forwardRef } from "react";
import "./Anchor.css";

type AnchorProps = {
  href: string;
  label: string;
};

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ href, label, ...rest }: AnchorProps, ref): JSX.Element => {
    return (
      <a className="anchor" href={href} ref={ref} {...rest}>
        {label}
      </a>
    );
  }
);

Anchor.displayName = "Anchor";

export { Anchor };
