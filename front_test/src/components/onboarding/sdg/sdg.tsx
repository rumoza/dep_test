import classNames from "classnames";
import styles from "./sdg.module.scss";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { Button } from "../button/button";

interface SdgProps {
  className?: string;
  selectedSdgs: string[];
  setSelectedSdgs: React.Dispatch<React.SetStateAction<string[]>>;
  handleForward: () => void;
}

function Sdg({
  className,
  selectedSdgs,
  setSelectedSdgs,
  handleForward,
}: SdgProps) {
  const handleSdgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sdg = event.target.value;
    if (event.target.checked) {
      // Add the selected SDG to the array if checked
      if (selectedSdgs.length < 5) {
        console.log(sdg);
        setSelectedSdgs([...selectedSdgs, sdg]);
        console.log(selectedSdgs);
      } else {
        event.preventDefault(); // Prevent checking more than 5 SDGs
      }
    } else {
      // Remove the SDG from the array if unchecked
      setSelectedSdgs(selectedSdgs.filter((item) => item !== sdg));
    }
  };
  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>
        Which SDGs do you fulfill with your startup project?
      </h1>
      <p className={styles.p}>Choose a maximum of 5</p>

      <div className={styles.checkboxContainer}>
        {/* Render checkboxes for each SDG */}
        {Array.from({ length: 17 }).map((_, index) => (
          <div key={index} className={styles.checkboxItem}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedSdgs.includes(
                    `SDG ${index + 1}: ${getSdgTitle(index + 1)}`
                  )}
                  onChange={handleSdgChange}
                  value={`SDG ${index + 1}: ${getSdgTitle(index + 1)}`}
                />
              }
              label={`${getSdgTitle(index + 1)}`}
            />
          </div>
        ))}
      </div>
      <Button buttonText="Next" onClick={handleForward} />
    </div>
  );
}

export default Sdg;

const getSdgTitle = (index: number) => {
  switch (index) {
    case 1:
      return "No Poverty";
    case 2:
      return "Zero Hunger";
    case 3:
      return "Good Health and Well-being";
    case 4:
      return "Quality Education";
    case 5:
      return "Gender Equality";
    case 6:
      return "Clean Water and Sanitation";
    case 7:
      return "Affordable and Clean Energy";
    case 8:
      return "Decent Work and Economic Growth";
    case 9:
      return "Industry, Innovation and Infrastructure";
    case 10:
      return "Reduced Inequalities";
    case 11:
      return "Sustainable Cities and Communities";
    case 12:
      return "Responsible Consumption and Production";
    case 13:
      return "Climate Action";
    case 14:
      return "Life Below Water";
    case 15:
      return "Life on Land";
    case 16:
      return "Peace, Justice, and Strong Institutions";
    case 17:
      return "Partnerships for the Goals";
    default:
      return "";
  }
};
