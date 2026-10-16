'use client';
import './Button.css';
import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
  ...props
}) {
  const isExternal = href?.startsWith('http');
  const Component = href ? (isExternal ? 'a' : Link) : 'button';
  const tagProps = href ? { href, ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }) } : { onClick };

  return (
    <Component
      className={`btn btn--${variant} btn--${size} ${className}`}
      {...tagProps}
      {...props}
    >
      <span className="btn__text">{children}</span>
    </Component>
  );
}
