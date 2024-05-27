import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
