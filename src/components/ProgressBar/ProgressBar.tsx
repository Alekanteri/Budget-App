import { FC } from "react";
import styles from "./style.module.scss";

interface ProgressBarProps {
  value: number;
  max: number;
}

const CompleteCheck = (
  num: number,
  goal: number,
): CSSModuleClasses | string => {
  if (num >= goal) {
    return styles.complete;
  }
  return styles.inProgress;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  value,
  max,
}): JSX.Element => {
  return (
    <progress
      value={value}
      max={max}
      className={`${styles.progressbar}  ${CompleteCheck(value, max)}`}
    />
  );
};
