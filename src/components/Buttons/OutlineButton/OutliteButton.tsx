import { FC } from "react";
import styles from "./style.module.scss";
import { ButtonProps } from "../DefaultButton";

export const OutlineButton: FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
}): JSX.Element => {
  return (
    <button onClick={onClick} className={styles.outlineBtn} disabled={disabled}>
      {children}
    </button>
  );
};
