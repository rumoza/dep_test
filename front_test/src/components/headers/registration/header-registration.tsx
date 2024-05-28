import classNames from "classnames";
import styles from "./header-registration.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

export interface HeaderProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
    </div>
  );
};
