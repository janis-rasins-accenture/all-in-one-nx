import { NavLink } from 'react-router';
import styles from './app-nav.module.css';

export function AppNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
    </nav>
  );
}
