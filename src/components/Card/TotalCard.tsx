import { FC } from "react";
import { Card } from "./Card";
import { BudgetType, ExpenseType } from "../../context/budgetContextProps";
import { useBudgets } from "../../context/budgetContext";

type TotalCardProps = {
  unusedEl: boolean;
};

export const TotalCard: FC<TotalCardProps> = (props) => {
  const { expenses, budgets } = useBudgets();
  const amount: number = expenses.reduce(
    (total: number, expense: ExpenseType) => total + expense.amount,
    0
  );

  const max: number = budgets.reduce(
    (total: number, budget: BudgetType) => total + budget.max,
    0
  );

  if (max === 0) return null;

  return (
    <Card
      max={max}
      amount={amount}
      budgetId="Total"
      title="TotalCard"
      {...props}
    />
  );
};
