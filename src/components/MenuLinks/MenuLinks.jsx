import { NavLink } from 'react-router-dom';
import { VerticalLine } from '../VerticalLine/VerticalLine';
import classes from './MenuLinks.module.css';

export const MenuLinks = () => {
  return (
    <div className={classes.menu}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to={'/budget'}
        end
      >
        Budget
      </NavLink>
      <VerticalLine />
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to={'/transaction-history'}
        end
      >
        Transaction History
      </NavLink>
    </div>
  );
};
