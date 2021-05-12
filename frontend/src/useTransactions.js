import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from './categories';

const useTransactions = (transactions) => {
  resetCategories();
  const selectedIncomeCategories = transactions.filter(
    (t) => t.transaction_type === 'income'
  );
  const selectedExpenseCategories = transactions.filter(
    (t) => t.transaction_type === 'expense'
  );

  const incomeTotal = selectedIncomeCategories.reduce(
    (acc, currVal) => (acc += currVal.transaction_amt),
    0
  );
  const expenseTotal = selectedExpenseCategories.reduce(
    (acc, currVal) => (acc += currVal.transaction_amt),
    0
  );

  selectedIncomeCategories.forEach((t) => {
    const category = incomeCategories.find((c) => {
      return c.type === t.transaction_cat;
    });

    if (category) {
      category.amount += t.transaction_amt;
    }
  });

  selectedExpenseCategories.forEach((t) => {
    const category = expenseCategories.find(
      (c) => c.type === t.transaction_cat
    );

    if (category) category.amount += t.transaction_amt;
  });

  const filtertedIncomeCategory = incomeCategories.filter((c) => c.amount > 0);
  const filtertedExpenseCategory = expenseCategories.filter(
    (c) => c.amount > 0
  );

  const chartExpenseData = {
    datasets: [
      {
        data: filtertedExpenseCategory.map((c) => c.amount),
        backgroundColor: filtertedExpenseCategory.map((c) => c.color),
      },
    ],
    labels: filtertedExpenseCategory.map((c) => c.type),
  };
  const chartIncomeData = {
    datasets: [
      {
        data: filtertedIncomeCategory.map((c) => c.amount),
        backgroundColor: filtertedIncomeCategory.map((c) => c.color),
      },
    ],
    labels: filtertedIncomeCategory.map((c) => c.type),
  };

  return {
    filtertedExpenseCategory,
    filtertedIncomeCategory,
    incomeTotal,
    expenseTotal,
    chartExpenseData,
    chartIncomeData,
  };
};

export default useTransactions;
