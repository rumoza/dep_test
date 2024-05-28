import LoginForm from "../../components/login/login-form";
import classNames from "classnames";
import styles from "./login.module.scss";
import { Header } from "../../components/headers/registration/header-registration";

function Login() {
  return (
    <div className={classNames(styles.root)}>
      <LoginForm route="/api/token/" />
    </div>
  );
}

export default Login;
