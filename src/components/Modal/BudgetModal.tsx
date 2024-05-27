import { FC, FormEvent, useRef } from "react";
import styles from "./style.module.scss";
import { BudgetModalProps } from "./BudgetModalProps";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { useBudgets } from "../../context/budgetContext";

export const BudgetModal: FC<BudgetModalProps> = ({
  show,
  onClose,
}): JSX.Element => {
  const titleRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const { addBudget } = useBudgets();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addBudget({
      title: titleRef.current?.value,
      max: Number(maxRef.current?.value),
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
            <h2>New Budget</h2>
            <button className={styles.modalCloseBtn} onClick={onClose}>
              X
            </button>
          </header>
          <section className={styles.modalBody}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input ref={titleRef} name="title" type="text" required />
              <label htmlFor="spending">Maximum Spending</label>
              <input
                ref={maxRef}
                name="spending"
                type="number"
                required
                min={0}
                step={0.01}
              />
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
