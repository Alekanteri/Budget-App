import { FC } from "react";
import styles from "./style.module.scss";
import { UncategorizedId, useBudgets } from "../../context/budgetContext";
import { BudgetType, ExpenseType } from "../../context/budgetContextProps";
import { formatter } from "../../utils/numberFormatter";

type ViewExpenseModalProps = {
  onClose: () => void;
  budgetId: string | null;
};

export const ViewExpensesModal: FC<ViewExpenseModalProps> = ({
  onClose,
  budgetId,
}): JSX.Element => {
  const { budgets, deleteBudget, deleteExpense, getBudgetsExpenses } =
    useBudgets();

  const budget =
    UncategorizedId === budgetId
      ? { title: UncategorizedId, id: UncategorizedId }
      : budgets.find((budget: BudgetType) => budget.id === budgetId);

  const expenses = getBudgetsExpenses(budgetId);

  const handleDeleteExpense = (expense: ExpenseType) => {
    deleteExpense(expense.id);
  };

  if (budgetId == null) {
    return <></>;
  } else {
    return (
      <div className={styles.modalBackdrop}>
        <div className={styles.modalWrapper}>
          <header className={styles.modalHeader}>
            <h2>Expenses - {budget?.title}</h2>
            {budgetId === UncategorizedId ? (
              ""
            ) : (
              <button
                onClick={() => {
                  deleteBudget(budget.id);
                  onClose();
                }}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            )}
            <button className={styles.modalCloseBtn} onClick={onClose}>
              X
            </button>
          </header>
          <section className={styles.expensesList}>
            {expenses.map((el: ExpenseType) => {
              return (
                <div key={el.id} className={styles.expensesItem}>
                  <h3>{el.description}</h3>
                  <span>{formatter.format(el.amount)}</span>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => {
                      handleDeleteExpense(el);
                    }}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
};
