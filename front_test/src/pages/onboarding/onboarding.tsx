import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./onboarding.module.scss";
import Slider from "../../components/onboarding/slider/slider";

import ArrowRight from "../../assets/arrow-right.svg";
import BuildingIcon from "../../assets/building.svg";
import ManagerIcon from "../../assets/manager.svg";

import { useUserData } from "../../context/user-data-context";
import { Header } from "../../components/headers/onboarding/header-onboarding";

export interface OnboardingProps {
  className?: string;
}

export const Onboarding = ({ className }: OnboardingProps) => {
  const navigate = useNavigate();

  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);

  const handleRoleSelected = (role: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      user_type: role,
    }));
    if (role === "startup") {
      navigate("/onboarding/startup/stage");
    } else if (role === "investor") {
      navigate("/onboarding/investor/stage");
    }
  };

  useEffect(() => {
    setPosition(0);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={0} />
      <div className={styles.registration}>
        <div className={styles.placeholder} />

        <div className={styles.form}>
          <div className={styles.container}>
            <p className={styles.p}>Welcome to Earthmates</p>
            <h1 className={styles.h1}>
              Please select your role or interest on Earthmates
            </h1>

            <div
              className={styles.role}
              id="startup"
              onClick={() => handleRoleSelected("startup")}
            >
              <img src={BuildingIcon} alt="building" />
              <div className={styles.description}>
                <h1 className={styles.h1}>Startup Founder</h1>
                <p className={styles.p}>
                  For startup founders looking to showcase their venture,
                  attract investment, and drive growth.
                </p>
              </div>
              <img src={ArrowRight} alt="building" />
            </div>

            <div
              className={styles.role}
              id="investor"
              onClick={() => handleRoleSelected("investor")}
            >
              <img src={ManagerIcon} alt="manager" />
              <div className={styles.description}>
                <h1 className={styles.h1}>Investor</h1>
                <p className={styles.p}>
                  For investors seeking to discover promising startups, explore
                  investment opportunities, and support entrepreneurship.
                </p>
              </div>
              <img src={ArrowRight} alt="building" />
            </div>
          </div>
        </div>

        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
