import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";
import { Button } from "../../../../components/onboarding/button/button";
import SdgComponent from "../../../../components/onboarding/sdg/sdg";

export interface SdgProps {
  className?: string;
}

export const Sdg = ({ className }: SdgProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  const [selectedSdgs, setSelectedSdgs] = useState<string[]>([]);

  const [position, setPosition] = useState(0);
  // State to track selected SDGs

  const handleBackward = () => {
    navigate("/onboarding/startup/impact");
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      sdg: selectedSdgs,
    }));
    navigate("/onboarding/startup/values");
  };

  useEffect(() => {
    setPosition(50);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={5} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={styles.form}>
          <div className={styles.container}>
            {/* Start of page internal component */}
            <SdgComponent
              selectedSdgs={selectedSdgs}
              setSelectedSdgs={setSelectedSdgs}
              handleForward={handleForward}
            />
          </div>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </div>
  );
};

// Function to get the title of the SDG based on its index
