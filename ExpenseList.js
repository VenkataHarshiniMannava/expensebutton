import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Food', amount: 50 },
    { id: 2, description: 'Transport', amount: 30 },
    { id: 3, description: 'Entertainment', amount: 20 }
  ]);

  const updateExpenseAmount = (id) => {
    setExpenses(prevExpenses => {
      return prevExpenses.map(expense => {
        if (expense.id === id) {
          return { ...expense, amount: 100 };
        }
        return expense;
      });
    });
  };

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            description={expense.description}
            amount={expense.amount}
            updateAmount={updateExpenseAmount}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
