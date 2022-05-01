import clsx from 'clsx';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

enum ButtonVariant {
  'default',
}

export type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variant = 'default',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'inline-flex rounded px-4 py-2 font-bold',
        'border  border-gray-600 shadow-sm',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        {
          ' bg-dark text-gray-100 disabled:bg-gray-700': variant === 'default',
        },
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
