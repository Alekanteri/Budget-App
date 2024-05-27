import { FC, useState } from "react";
import styles from "./style.module.scss";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { OutlineButton } from "../Buttons/OutlineButton/OutliteButton";
import { BudgetModal } from "../Modal/BudgetModal";
import { ExpenseModal } from "../Modal/ExpenseModal";

export const Header: FC = (): JSX.Element => {
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);

  const openBudget = () => setIsBudgetOpen(true);
  const closeBudget = () => setIsBudgetOpen(false);

  const openExpense = () => setIsExpenseOpen(true);
  const closeExpense = () => setIsExpenseOpen(false);

  return (
    <header className={styles.budgetHeader}>
      <BudgetModal show={isBudgetOpen} onClose={closeBudget} />
      <ExpenseModal
        show={isExpenseOpen}
        onClose={closeExpense}
        defaultBudgetId=""
      />
      <h2 className={styles.headerTitle}>Budgets</h2>
      <div className={styles.headerBtns}>
        <DefaultButton onClick={openBudget}>Add Budget</DefaultButton>
        <OutlineButton onClick={openExpense}>Add Expense</OutlineButton>
      </div>
    </header>
  );
};
