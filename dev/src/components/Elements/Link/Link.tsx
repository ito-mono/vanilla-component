export type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Link({ href, children }: LinkProps) {
  return <link href={href}>{children}</link>;
}
