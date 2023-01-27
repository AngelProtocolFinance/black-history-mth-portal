import React from "react";

export type ExtLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "target" | "rel"
>;

export default function ExtLink({
  className,
  children,
  ...props
}: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-d1 dark:text-orange-l2 hover:text-orange hover:dark:text-orange-l3 ${
        className ?? ""
      }`}
    >
      {children}
    </a>
  );
}
