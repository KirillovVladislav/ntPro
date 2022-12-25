import { Link, Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link to={'/'}>Trading</Link>
        <Link to={'archive'}>Archive</Link>
      </div>
      <Outlet />
    </div>
  );
};
