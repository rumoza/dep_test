import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./strategy.module.scss";

import { Button } from "../button/button";

export interface StrategyProps {
  className?: string;
  selectedStrategy: string[];
  setSelectedStrategy: React.Dispatch<React.SetStateAction<string[]>>;
  handleForward: () => void;
}

export const Strategy = ({
  className,
  selectedStrategy,
  setSelectedStrategy,
  handleForward,
}: StrategyProps) => {
  const handleStrategyToggle = (strategy: string) => {
    if (selectedStrategy.includes(strategy)) {
      setSelectedStrategy(selectedStrategy.filter((item) => item !== strategy));
    } else {
      setSelectedStrategy([...selectedStrategy, strategy]);
    }
  };

  const strategys = ["Clear and quick exit", "A long term exit", "No exit"];

  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>I am looking for</h1>
      <p className={styles.p}>Choose your long term business plan</p>

      <div className={styles.strategy}>
        {strategys.map((strategy) => (
          <button
            key={strategy}
            className={classNames(styles.button, {
              [styles.selected]: selectedStrategy.includes(strategy),
            })}
            onClick={() => handleStrategyToggle(strategy)}
          >
            {strategy}
          </button>
        ))}
      </div>
      {true && <Button buttonText="Next" onClick={handleForward} />}
    </div>
  );
};

export default Strategy;
