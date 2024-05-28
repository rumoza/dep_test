import React, { useState, useEffect, useRef } from "react";
import Slider from "@mui/material/Slider";
import styles from "./input-slider.module.scss";

interface InputSliderProps {
  // generalised slider props to ensure reusability for the Impact component.
  value: number;
  onChange: (event: Event, value: number | number[]) => void;
  min: number;
  max: number;
  step: number;
  labels: string[]; // labels for the slider
  displayStandard?: boolean; // whether the slider displays the currency and the format on the label
}

const InputSlider: React.FC<InputSliderProps> = ({
  value,
  onChange,
  min,
  max,
  step,
  labels,
  displayStandard,
}) => {
  const [displayValue, setDisplayValue] = useState<number>(value);
  const [labelPosition, setLabelPosition] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const newValueNum = typeof newValue === "number" ? newValue : newValue[0];
    setDisplayValue(newValueNum);
    onChange(event, newValueNum);
  };

  const updateLabelPosition = (value: number) => {
    // the label now follow the slider position
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const percentage = ((value - min) / (max - min)) * 100;
      setLabelPosition((sliderWidth * percentage) / 100);
    }
  };

  useEffect(() => {
    // update of label position
    updateLabelPosition(displayValue);
  }, [displayValue, min, max]);

  function formatNumber(number: number): string {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <div className={styles.InputSlider_container} ref={sliderRef}>
      <div
        className={styles["slider-label"]}
        style={{ left: `${labelPosition}px` }}
      >
        {displayStandard ? displayValue : `$${formatNumber(displayValue)}`}
      </div>
      <Slider
        className={styles.slider}
        aria-label="Value"
        value={value}
        onChange={handleSliderChange}
        step={step}
        min={min}
        max={max}
        marks={[
          { value: min, label: labels[0] },
          { value: max, label: labels[1] },
        ]}
      />
    </div>
  );
};

export default InputSlider;
