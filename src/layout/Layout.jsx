import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { MenuLinks } from '../components/MenuLinks';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <MenuLinks />

      <Outlet />
    </div>
  );
};
