import VerificationForm from "../../components/verification/verification-form";
import classNames from "classnames";
import styles from "../register/register.module.scss";
import { Header } from "../../components/headers/registration/header-registration";

//page registerVerification

function RegisterVerification() {
  return (
    <div className={classNames(styles.root)}>
      {/*made this but don't understand what should be the route*/}
      <VerificationForm route="/api/user/register/" />
    </div>
  );
}

export default RegisterVerification;
