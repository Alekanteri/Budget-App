import { FC, FormEvent, useRef } from "react";
import styles from "./style.module.scss";
import { ExpenseModalProps } from "./ExpenseModalProps";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { UncategorizedId, useBudgets } from "../../context/budgetContext";
import { BudgetType } from "../../context/budgetContextProps";

export const ExpenseModal: FC<ExpenseModalProps> = ({
  show,
  onClose,
  defaultBudgetId,
}): JSX.Element => {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const budgetIdRef = useRef<HTMLSelectElement>(null);
  const { addExpense, budgets } = useBudgets();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addExpense({
      description: descriptionRef.current?.value,
      amount: Number(amountRef.current?.value),
      budgetId: budgetIdRef.current?.value,
    });

    onClose();
  };
  if (!show) {
    return <></>;
  } else {
    return (
      <div className={styles.modalBackdrop}>
        <div className={styles.modalWrapper}>
          <header className={styles.modalHeader}>
            <h2>New Expense</h2>
            <button className={styles.modalCloseBtn} onClick={onClose}>
              X
            </button>
          </header>
          <section className={styles.modalBody}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="description">Description</label>
              <input
                ref={descriptionRef}
                name="description"
                type="text"
                required
              />
              <label htmlFor="amount">Amount</label>
              <input
                ref={amountRef}
                name="amount"
                type="number"
                required
                min={0}
                step={0.01}
              />
              <label htmlFor="budgetId">Budget</label>
              <select
                name="budgetId"
                defaultValue={defaultBudgetId}
                ref={budgetIdRef}
              >
                <option value={UncategorizedId}>Uncategorized</option>
                {budgets.map((el: BudgetType) => {
                  return (
                    <option key={el.id} value={el.id}>
                      {el.title}
                    </option>
                  );
                })}
              </select>
              <div className={styles.modalFooter}>
                <DefaultButton type="submit">Add</DefaultButton>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
};
