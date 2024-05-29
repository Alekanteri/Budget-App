import { FC } from "react";
import { Card } from "./Card";
import { ExpenseType } from "../../context/budgetContextProps";
import { UncategorizedId, useBudgets } from "../../context/budgetContext";

export const UncategorizedCard: FC = (props) => {
  const { getBudgetsExpenses } = useBudgets();
  const amount: number = getBudgetsExpenses(UncategorizedId).reduce(
    (total: number, expense: ExpenseType) => total + expense.amount,
    0
  );

  if (amount === 0) return null;

  return (
    <Card
      max={0}
      budgetId={UncategorizedId}
      title={UncategorizedId}
      amount={amount}
      {...props}
    />
  );
};
