import { FC, useState } from "react";
import styles from "./style.module.scss";
import { formatter } from "../../utils/numberFormatter";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { OutlineButton } from "../Buttons/OutlineButton/OutliteButton";
import { ExpenseModal } from "../Modal/ExpenseModal";
import { UncategorizedId } from "../../context/budgetContext";

interface CardProps {
  title: string;
  amount: number;
  max: number;
  budgetId: string;
}

export const Card: FC<CardProps> = ({
  title,
  amount,
  max,
  budgetId,
}): JSX.Element => {
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] =
    useState<string>(UncategorizedId);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);

  const openExpense = () => {
    setIsExpenseOpen(true);
    setAddExpenseModalBudgetId(budgetId);
  };
  const closeExpense = () => setIsExpenseOpen(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <div>{title}</div>
          <div>
            {formatter.format(amount)}{" "}
            <span className={styles.cardTitleGoal}>
              / {formatter.format(max)}
            </span>
          </div>
        </div>
        <div>
          <ProgressBar value={amount} max={max} />
        </div>
        <div className={styles.cardButtons}>
          <OutlineButton onClick={openExpense}>Add Expense</OutlineButton>
          <OutlineButton disabled>View Expenses</OutlineButton>
        </div>
      </div>
      <ExpenseModal
        show={isExpenseOpen}
        onClose={closeExpense}
        defaultBudgetId={addExpenseModalBudgetId}
      />
    </>
  );
};
