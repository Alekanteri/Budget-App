import { FC, createContext, useContext } from "react";
import { uuidv4 } from "../utils/UIDGenerate";
import {
  BudgetProviderProps,
  BudgetType,
  ExpenseType,
  AddExpenseProps,
  AddBudgetProps,
  DeleteExpenseProps,
  DeleteBudgetProps,
} from "./budgetContextProps";
import { useLocalStore } from "../hooks/LocalStorage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BudgetContext = createContext<any>({});

export const UncategorizedId = "Uncategorized";

export const useBudgets = () => {
  return useContext(BudgetContext);
};

export const BudgetProvider: FC<BudgetProviderProps> = ({ children }) => {
  const [budgets, setBudgets] = useLocalStore("budgets", []);
  const [expenses, setExpenses] = useLocalStore("expenses", []);

  const getBudgetsExpenses = (budgetId: string) => {
    return expenses.filter(
      (expense: ExpenseType) => expense.budgetId === budgetId
    );
  };

  const addExpense: AddExpenseProps = ({ description, amount, budgetId }) => {
    setExpenses((prevExpense: Array<ExpenseType>) => {
      return [...prevExpense, { id: uuidv4(), description, amount, budgetId }];
    });
  };

  const deleteExpense: DeleteExpenseProps = (id) => {
    setExpenses((prevExpense: Array<ExpenseType>) => {
      return prevExpense.filter((expense: ExpenseType) => expense.id !== id);
    });
  };

  const addBudget: AddBudgetProps = ({ title, max }) => {
    setBudgets((prevBudgets: Array<BudgetType>) => {
      if (prevBudgets.find((budget: BudgetType) => budget.title == title)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidv4(), title, max }];
    });
  };

  const deleteBudget: DeleteBudgetProps = (id) => {
    setExpenses((prevExpenses: Array<ExpenseType>) => {
      return prevExpenses.map((expense: ExpenseType) => {
        if (expense.budgetId !== id) {
          return expense;
        }
        return { ...expense, budgetId: UncategorizedId };
      });
    });
    setBudgets((prevBudgets: Array<BudgetType>) => {
      return prevBudgets.filter((budget: BudgetType) => budget.id !== id);
    });
  };

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetsExpenses,
        addExpense,
        deleteExpense,
        addBudget,
        deleteBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
