import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles['header-container']}>
      <span className={styles.subtitle}>my</span>
      <h1 className={styles.header}>Zero-Budget</h1>
    </div>
  );
};
