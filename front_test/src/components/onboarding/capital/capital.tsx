import classNames from "classnames";
import styles from "./capital.module.scss";

import { Button } from "../button/button";
import { useState } from "react";
import InputSlider from "../input-slider/input-slider";

export interface CapitalProps {
  className?: string;
  capitalAmount: number;
  handleCapitalChange: (value: number) => void;
  handleForward: () => void;
}

export const Capital = ({
  className,
  capitalAmount,
  handleCapitalChange,
  handleForward,
}: CapitalProps) => {
  const [sliderValue, setSliderValue] = useState<number>(500000); // Set initial value
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(typeof newValue === "number" ? newValue : newValue[0]);
    handleCapitalChange(typeof newValue === "number" ? newValue : 0);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>How much capital does your company need?</h1>
      <p className={styles.p}>
        Use the slider to select your company funding need
      </p>
      <div className={styles.slider}>
        <InputSlider
          value={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={1500000}
          step={10000}
          labels={["$0", "$1.5M"]}
        />
      </div>
      {true && <Button buttonText="Next" onClick={handleForward} />}{" "}
      {/* Should be only if capital > 0 */}
      {/* Render button only if capital is selected */}
    </div>
  );
};

export default Capital;
