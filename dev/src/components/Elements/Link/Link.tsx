import { styles } from './Link.css';
import clsx from 'clsx';

export type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Link({ href, children, className }: LinkProps) {
  const classNames = clsx(styles.link, className);
  return (
    <a className={classNames} href={href}>
      {children}
    </a>
  );
}
