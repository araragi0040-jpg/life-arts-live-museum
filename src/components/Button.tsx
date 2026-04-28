import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const classNames = ["button", `button--${variant}`, className].filter(Boolean).join(" ");

  if (isExternalLink(href)) {
    return (
      <a className={classNames} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href}>
      {children}
    </Link>
  );
}
