import { FC, useState } from "react";
import styles from "./style.module.scss";
import { formatter } from "../../utils/numberFormatter";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { OutlineButton } from "../Buttons/OutlineButton/OutliteButton";
import { ExpenseModal } from "../Modal/ExpenseModal";
import { UncategorizedId } from "../../context/budgetContext";
import { ViewExpensesModal } from "../Modal/ViewExpensesModal";

interface CardProps {
  title: string;
  amount: number;
  max: number;
  budgetId: string;
  unusedEl?: boolean;
}

export const Card: FC<CardProps> = ({
  title,
  amount,
  max,
  budgetId,
  unusedEl,
}): JSX.Element => {
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] =
    useState<string>(UncategorizedId);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);

  const [viewExpensesModalId, setViewExpensesModalId] = useState<string | null>(
    null
  );

  const openViewExpenses = () => {
    setViewExpensesModalId(budgetId);
  };

  const openExpense = () => {
    setIsExpenseOpen(true);
    setAddExpenseModalBudgetId(budgetId);
  };

  const closeExpense = () => setIsExpenseOpen(false);

  const closeViewExpenseModal = () => setViewExpensesModalId(null);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <div>{title}</div>
          <div>
            {formatter.format(amount)}{" "}
            {max !== 0 && !unusedEl && (
              <span className={styles.cardTitleGoal}>
                / {formatter.format(max)}
              </span>
            )}
          </div>
        </div>
        <div>
          <ProgressBar value={amount} max={max} />
        </div>
        {!unusedEl && (
          <div className={styles.cardButtons}>
            <OutlineButton onClick={openExpense}>Add Expense</OutlineButton>
            <OutlineButton onClick={openViewExpenses} expense>
              View Expenses
            </OutlineButton>
          </div>
        )}
      </div>
      <ExpenseModal
        show={isExpenseOpen}
        onClose={closeExpense}
        defaultBudgetId={addExpenseModalBudgetId}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalId}
        onClose={closeViewExpenseModal}
      />
    </>
  );
};
