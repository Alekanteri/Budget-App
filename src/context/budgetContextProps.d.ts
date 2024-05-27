import { ReactNode } from "react";

export interface BudgetProviderProps {
  children: ReactNode;
}

export type BudgetType = {
  id: string;
  title: string;
  max: number;
};

export type ExpenseType = {
  id: string;
  budgetId: string;
  amount: number;
  description: string;
};

export type AddExpenseProps = ({
  description: string,
  amount: number,
  budgetId: string,
}) => void;

export type DeleteExpenseProps = (id: string) => void;

export type AddBudgetProps = ({ title: string, max: number }) => void;

export type DeleteBudgetProps = (id: string) => void;
