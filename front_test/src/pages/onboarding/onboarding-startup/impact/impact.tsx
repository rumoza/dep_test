import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import ImpactComponent from "../../../../components/onboarding/impact/impact";

import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";

export interface ImpactProps {
  className?: string;
}

export const Impact = ({ className }: ImpactProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [impactSelected, setImpactSelected] = useState(false); // State to track impact selection
  const [impactAmount, setImpactAmount] = useState(0); // State to store impact amount

  const handleBackward = () => {
    navigate("/onboarding/startup/capital");
  };

  const handleForward = () => {
    console.log(userData);
    navigate("/onboarding/startup/sdg");
  };

  const handleImpactSelected = (impact: string) => {
    if (impact === "Select impact") {
      setImpactSelected(false); // Reset ImpactSelected if default option is selected
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        impact: parseFloat(impact),
      }));
      setImpactSelected(true); // Set impactSelected to true when an impact is selected
    }
  };

  useEffect(() => {
    setPosition(40);
  }, []);

  const handleImpactChange = (value: number) => {
    setImpactAmount(value);
    setUserData((prevUserData) => ({
      ...prevUserData,
      impact: value,
    }));
    setImpactSelected(true);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={4} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={styles.form}>
          <div className={styles.container}>
            {/* Start of page internal component */}
            <ImpactComponent
              handleImpactChange={handleImpactChange}
              handleForward={handleForward}
              impactAmount={impactAmount}
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
