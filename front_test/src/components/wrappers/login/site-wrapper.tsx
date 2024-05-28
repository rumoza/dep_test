import classNames from "classnames";
import styles from "./site-wrapper.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../headers/registration/header-registration";

export interface SiteWrapperProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SiteWrapper = ({ className }: SiteWrapperProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.content}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
