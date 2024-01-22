/// <reference types="react" />
export type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};
export declare function Link({ href, children, className }: LinkProps): import("react/jsx-runtime").JSX.Element;
