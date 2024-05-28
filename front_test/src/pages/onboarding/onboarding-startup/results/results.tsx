import React, { useState, useEffect, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import ResultsComponent from "../../../../components/onboarding/results/results";

import api from "../../../../api";

import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";

export interface ResultsProps {
  className?: string;
}

export const Results = ({ className }: ResultsProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [industrySelected, setIndustrySelected] = useState(false); // State to track industry selection

  const handleBackward = () => {
    navigate("/onboarding/startup/strategy");
  };

  useEffect(() => {
    setPosition(100);
  }, []);

  const [startup, setStartup] = useState([]);

  const getStartup = () => {
    api
      .get("/api/startup/")
      .then((res) => res.data)
      .then((data) => {
        setStartup(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const { user_type, ...startupData } = userData;
  const createStartup = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log(startupData);
    api
      .post("/api/startup/", startupData)
      .then((res) => {
        if (res.status === 201) alert("Startup created!");
        else alert("Failed to make startup.");
        getStartup();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={10} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={styles.form}>
          <div className={styles.container}>
            {/* Start of page internal component */}
            <ResultsComponent userData={userData} />
          </div>
        </div>
        <button className={styles.button} onClick={createStartup}>
          Next
        </button>
      </div>
    </div>
  );
};
