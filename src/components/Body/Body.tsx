import { FC } from "react";
import styles from "./style.module.scss";
import { Card } from "../Card/Card";
import { useBudgets } from "../../context/budgetContext";
import { BudgetType, ExpenseType } from "../../context/budgetContextProps";
import { UncategorizedCard } from "../Card/UncategorizedCard";
import { TotalCard } from "../Card/TotalCard";

export const Body: FC = (): JSX.Element => {
  const { budgets, getBudgetsExpenses } = useBudgets();
  return (
    <main className={styles.bodyContainer}>
      {budgets.map((el: BudgetType) => {
        const amount: number = getBudgetsExpenses(el.id).reduce(
          (total: number, expense: ExpenseType) => total + expense.amount,
          0,
        );
        return (
          <Card
            key={el.id}
            title={el.title}
            amount={amount}
            max={el.max}
            budgetId={el.id}
          />
        );
      })}
      <UncategorizedCard />
      <TotalCard unusedEl />
    </main>
  );
};
