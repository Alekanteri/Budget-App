import { FC } from "react";
import styles from "./style.module.scss";
import { ButtonProps } from "../DefaultButton";

export const DefaultButton: FC<ButtonProps> = ({
  children,
  onClick,
  type,
}): JSX.Element => {
  return (
    <button
      type={type !== undefined ? type : "button"}
      onClick={onClick}
      className={styles.defaultBtn}
    >
      {children}
    </button>
  );
};
