import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-primary text-white shadow-glow hover:bg-violet-700',
  secondary: 'bg-slate-900 text-white hover:bg-slate-800',
  outline: 'border border-slate-200 bg-white text-slate-900 hover:border-primary hover:text-primary',
};

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

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