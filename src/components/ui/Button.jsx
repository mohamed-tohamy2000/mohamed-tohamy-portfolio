import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = {
    primary: "btn btn-success text-black hover:scale-[1.02]",
    outline: "btn btn-outline border-base-300 hover:border-primary",
    ghost: "btn btn-ghost",
  };

  const classes = cn(styles[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}


