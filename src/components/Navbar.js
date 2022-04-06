import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
