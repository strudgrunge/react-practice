import React from 'react';
import ExpenseForm from './ExpenseForm';
import classes from './NewExpense.module.css';

/**
 * @author
 * @function NewExpense
 **/

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      };
      console.log(expenseData);
      props.onAddExpense(expenseData)
  };
  return (
    <div className={classes.newExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
