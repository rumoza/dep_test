import React from "react";
import classNames from "classnames";
import styles from "./slider.module.scss";

interface SliderProps {
  position: number;
}

const Slider: React.FC<SliderProps> = ({ position }) => {
  const subSliders = Array.from({ length: 10 }, (_, index) => {
    const isFilled = index < position;
    return (
      <div
        key={index}
        className={classNames(styles.sliderSubTrack, {
          [styles.filled]: isFilled,
        })}
      ></div>
    );
  });

  return <div className={classNames(styles.root)}>{subSliders}</div>;
};

export default Slider;
