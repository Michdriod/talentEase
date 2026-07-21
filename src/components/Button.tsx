import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  children,
  className = "",
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-sm transition-colors";
  const styles = {
    primary:
      "bg-green text-white hover:bg-green-dark focus-visible:outline-2 focus-visible:outline-green",
    secondary:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-navy",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
