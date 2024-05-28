import classNames from "classnames";
import styles from "./button.module.scss";
import React from "react";
import { text } from "stream/consumers";

export interface ButtonProps {
  className?: string;
  buttonText: string;
  onClick?: () => void;
  color?: string;
  textColor?: string;
}

const defaultClick = () => {};

export const Button: React.FC<ButtonProps> = ({
  className,
  buttonText,
  onClick,
  color = "#ff8516", // Default color if not provided
  textColor = "#ffffff", // Default color if not provided
}: ButtonProps) => {
  const handleClick = onClick || defaultClick;

  return (
    <div
      className={classNames(styles.root, className)}
      onClick={handleClick}
      style={{ backgroundColor: color, color: textColor }}
    >
      {buttonText}
    </div>
  );
};
