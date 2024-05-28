import React from "react";
import classNames from "classnames";
import styles from "./stage.module.scss";

interface StageProps {
  className?: string;
  handleStageSelected: (stage: string) => void;
}

function Stage({ className, handleStageSelected }: StageProps) {
  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>What's your company's current stage?</h1>
      <p className={styles.p}>Choose one that applies to your company</p>

      <div className={styles.stages}>
        <button
          className={styles.button}
          onClick={() => handleStageSelected("Pre-Seed")}
        >
          Pre-Seed
        </button>
        <button
          className={styles.button}
          onClick={() => handleStageSelected("Series A")}
        >
          Series A
        </button>
        <button
          className={styles.button}
          onClick={() => handleStageSelected("Series B")}
        >
          Series B
        </button>
        <button
          className={styles.button}
          onClick={() => handleStageSelected("Series C")}
        >
          Series C
        </button>
        <button
          className={styles.button}
          onClick={() => handleStageSelected("Bridge")}
        >
          Bridge
        </button>
      </div>
    </div>
  );
}

export default Stage;
