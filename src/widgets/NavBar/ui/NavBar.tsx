import { classNames } from "shared/lib/classNames/classNames";

import styles from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [])}>
      <div className={styles.links}></div>
    </div>
  );
};
