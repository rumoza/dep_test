import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import ValuesComponent from "../../../../components/onboarding/values/values";

import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";

export interface ValuesProps {
  className?: string;
}

export const Values = ({ className }: ValuesProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [selectedValues, setSelectedValues] = useState<string[]>([]); // State to track selected Values

  console.log(userData);

  const handleBackward = () => {
    navigate("/onboarding/investor/sdg");
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      values: selectedValues,
    }));
    navigate("/onboarding/investor/expertise");
  };

  useEffect(() => {
    setPosition(60);
  }, []);

  const handleValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      // Add the selected values to the array if checked
      if (selectedValues.length < 6) {
        setSelectedValues([...selectedValues, value]);
      } else {
        event.preventDefault(); // Prevent checking more than 5 Values
      }
    } else {
      // Remove the Values from the array if unchecked
      setSelectedValues(selectedValues.filter((item) => item !== value));
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={6} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={styles.form}>
          <div className={styles.container}>
            {/* Start of page internal component */}
            <ValuesComponent
              selectedValues={selectedValues}
              setSelectedValues={setSelectedValues}
              handleForward={handleForward}
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};

// List of the 10 most known team values
const teamValues = [
  "Trust",
  "Respect",
  "Collaboration",
  "Innovation",
  "Accountability",
  "Excellence",
  "Integrity",
  "Diversity",
  "Empowerment",
  "Communication",
];
