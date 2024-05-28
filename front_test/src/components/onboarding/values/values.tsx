import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./values.module.scss";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Button } from "../button/button";

export interface ValuesProps {
  className?: string;
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
  handleForward: () => void;
}

export const Values = ({
  className,
  selectedValues,
  setSelectedValues,
  handleForward,
}: ValuesProps) => {
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
      <h1 className={styles.h1}>
        What are the relevant values for your teams?
      </h1>
      <p className={styles.p}>Choose a maximum of 6</p>

      <div className={styles.checkboxContainer}>
        {/* Render checkboxes for each value */}
        {teamValues.map((value, index) => (
          <div key={index} className={styles.checkboxItem}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedValues.includes(value)}
                  onChange={handleValuesChange}
                  value={value}
                />
              }
              label={`${value}`}
            />
          </div>
        ))}
      </div>

      <Button buttonText="Next" onClick={handleForward} />
    </div>
  );
};

export default Values;

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
