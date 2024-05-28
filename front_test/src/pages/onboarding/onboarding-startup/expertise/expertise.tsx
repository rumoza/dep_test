import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import ExpertiseComponent from "../../../../components/onboarding/expertise/expertise";

import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";

export interface ExpertiseProps {
  className?: string;
}

export const Expertise = ({ className }: ExpertiseProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  console.log(userData);

  const [position, setPosition] = useState(0);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding/startup/values");
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      expertise: selectedExpertise,
    }));
    navigate("/onboarding/startup/matching");
  };

  useEffect(() => {
    setPosition(70);
  }, []);

  const expertises = [
    "Accounting",
    "Controlling",
    "Fundraising",
    "HR",
    "Logistics",
    "Management",
    "Marketing",
  ];

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={7} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={() => handleBackward()}>
          Back
        </button>
        <div className={styles.form}>
          <div className={styles.container}>
            {/* Start of page internal component */}
            <ExpertiseComponent
              selectedExpertise={selectedExpertise}
              setSelectedExpertise={setSelectedExpertise}
              handleForward={handleForward}
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
