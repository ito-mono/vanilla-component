import { Link } from '@/components/Elements/Link';
import { Card } from './Card';
import { styles } from './Welcome.css';

export function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>Welcome Dev</p>
      </div>
      <div className={styles.linksWrapper}>
        <Link href='http://localhost:5173/'>
          <Card>
            <img src='vite.svg'></img>
          </Card>
        </Link>
        <Link href='http://localhost:6006/'>
          <Card>
            <img src='storybook.svg'></img>
          </Card>
        </Link>
      </div>
    </div>
  );
}
