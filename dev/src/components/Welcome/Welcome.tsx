import { Card } from './Card';
import { styles } from './Welcome.css';

export function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>Welcome Dev</p>
      </div>
      <div>
        <Card></Card>
        <div>
          <a href='http://localhost:5173/'>
            <img src='vite.svg'></img>
          </a>
        </div>
        <div>
          <a href='http://localhost:6006/'>
            <img src='storybook.svg'></img>
          </a>
        </div>
      </div>
    </div>
  );
}
