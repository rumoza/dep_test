import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";

import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";

import StrategyComponent from "../../../../components/onboarding/strategy/strategy";

export interface StrategyProps {
  className?: string;
}

export const Strategy = ({ className }: StrategyProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  console.log(userData);

  const [position, setPosition] = useState(0);
  const [selectedStrategy, setSelectedStrategy] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding/startup/matching");
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      strategy: selectedStrategy,
    }));
    navigate("/onboarding/startup/results");
  };

  useEffect(() => {
    setPosition(90);
  }, []);

  const strategys = ["Clear and quick exit", "A long term exit", "No exit"];

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={9} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={() => handleBackward()}>
          Back
        </button>
        <div className={styles.form}>
          <div className={styles.container}>
            {/* Start of page internal component */}
            <StrategyComponent
              selectedStrategy={selectedStrategy}
              setSelectedStrategy={setSelectedStrategy}
              handleForward={handleForward}
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
