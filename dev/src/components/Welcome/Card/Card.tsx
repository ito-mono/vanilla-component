import { styles } from './Card.css';

export type CardProps = {
  children: React.ReactNode;
};

export function Card({ children, ...props }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}
