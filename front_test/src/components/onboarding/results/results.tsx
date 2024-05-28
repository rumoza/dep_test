import React, { useState, useEffect, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./results.module.scss";

export interface ResultsProps {
  className?: string;
  userData?: any;
}

export const Results = ({ className, userData }: ResultsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>Results</h1>
      <h2 className={styles.h2}>User Type</h2>
      <p className={styles.p}>{userData.user_type}</p>
      <h2 className={styles.h2}>Stage</h2>
      <p className={styles.p}>{userData.stage}</p>
      <h2 className={styles.h2}>Industry</h2>
      <p className={styles.p}>{userData.industry}</p>
      <h2 className={styles.h2}>Capital</h2>
      <p className={styles.p}>{userData.capital}</p>
      <h2 className={styles.h2}>Impact</h2>
      <p className={styles.p}>{userData.impact}</p>
      <h2 className={styles.h2}>SDG</h2>
      <p className={styles.p}>{userData.sdg}</p>
      <h2 className={styles.h2}>Values</h2>
      <p className={styles.p}>{userData.values}</p>
      <h2 className={styles.h2}>Expertise</h2>
      <p className={styles.p}>{userData.expertise}</p>
      <h2 className={styles.h2}>Matching</h2>
      <p className={styles.p}>{userData.matching}</p>
      <h2 className={styles.h2}>Strategy</h2>
      <p className={styles.p}>{userData.strategy}</p>
    </div>
  );
};

export default Results;
