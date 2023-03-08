import { NavLink } from 'react-router-dom';
import { VerticalLine } from '../VerticalLine/VerticalLine';
import styles from './MenuLinks.module.css';

export const MenuLinks = () => {
  return (
    <div className={styles.menu}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        to={'/budget'}
        end
      >
        Budget
      </NavLink>
      <VerticalLine />
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        to={'/transaction-history'}
        end
      >
        Transaction History
      </NavLink>
    </div>
  );
};
