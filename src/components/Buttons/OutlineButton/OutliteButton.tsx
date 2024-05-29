import { FC } from "react";
import styles from "./style.module.scss";
import { ButtonProps } from "../DefaultButton";

export const OutlineButton: FC<ButtonProps> = ({
  children,
  expense,
  onClick,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${styles.outlineBtn} ${expense ? styles.outlineExpenseBtn : ""}`}
    >
      {children}
    </button>
  );
};
