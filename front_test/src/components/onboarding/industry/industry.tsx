import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./industry.module.scss";

import { Button } from "../button/button";

export interface IndustryProps {
  className?: string;
  handleIndustrySelected: (industry: string) => void;
  handleForward: () => void;
}

export const Industry = ({
  className,
  handleIndustrySelected,
  handleForward,
}: IndustryProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>Which industry does your company belong to?</h1>
      <p className={styles.p}>Choose your company's niche</p>
      <select
        className={styles.select}
        onChange={(e) => handleIndustrySelected(e.target.value)}
      >
        <option value="Select industry">Select industry</option>{" "}
        {/* Default option */}
        <option value="Technology">Technology</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Mobility">Mobility</option>
        <option value="Finance">Finance</option>
      </select>
      {true && <Button buttonText="Next" onClick={handleForward} />} {/* t */}
      {/* Render button only if industry is selected */}
    </div>
  );
};

export default Industry;
