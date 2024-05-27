import { BudgetType, ExpenseType } from "../context/budgetContextProps";

type DefaultValueType = Array<BudgetType | ExpenseType> | (() => never);

type DefaultValueAsFunctoin = () => never;
