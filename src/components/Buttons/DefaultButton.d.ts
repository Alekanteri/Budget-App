import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  expense?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
