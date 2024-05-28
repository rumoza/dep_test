import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import MatchingComponent from "../../../../components/onboarding/matching/matching";

import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";

export interface MatchingProps {
  className?: string;
}

export const Matching = ({ className }: MatchingProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  console.log(userData);

  const [position, setPosition] = useState(0);
  const [selectedMatching, setSelectedMatching] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding/investor/expertise");
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      matching: selectedMatching,
    }));
    navigate("/onboarding/investor/strategy");
  };

  useEffect(() => {
    setPosition(80);
  }, []);

  const matchings = [
    "Family Office",
    "VCs",
    "Business Angels",
    "Foundations",
    "Everyone",
  ];

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={8} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={() => handleBackward()}>
          Back
        </button>
        <div className={styles.form}>
          <div className={styles.container}>
            {/* Start of page internal component */}
            <MatchingComponent
              selectedMatching={selectedMatching}
              setSelectedMatching={setSelectedMatching}
              handleForward={handleForward}
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
