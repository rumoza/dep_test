import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./impact.module.scss";

import { Button } from "../button/button";
import exp from "constants";
import InputSlider from "../input-slider/input-slider";

export interface ImpactProps {
  className?: string;
  impactAmount: number;
  handleImpactChange: (value: number) => void;
  handleForward: () => void;
}

export const Impact = ({
  className,
  impactAmount,
  handleImpactChange,
  handleForward,
}: ImpactProps) => {
  const [sliderValue, setSliderValue] = useState<number>(500000); // Set initial value
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(typeof newValue === "number" ? newValue : newValue[0]);
    handleImpactChange(typeof newValue === "number" ? newValue : 0);
  };
  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>
        How important is it to have impact through your business?
      </h1>
      <p className={styles.p}>
        Rate the importance of impact for your company on a scale of 1 - 10
      </p>
      <div className={styles.slider}>
        <InputSlider
          value={sliderValue}
          onChange={handleSliderChange}
          min={1}
          max={10}
          step={1}
          labels={["1", "10"]}
          displayStandard={true}
        />
      </div>
      {true && <Button buttonText="Next" onClick={handleForward} />}{" "}
      {/* Should display only if impact > 0 */}
      {/* Render button only if impact is selected */}
    </div>
  );
};

export default Impact;
