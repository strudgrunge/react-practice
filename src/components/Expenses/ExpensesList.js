import React from 'react';
import ExpenseItem from './ExpenseItem';
import classes from './ExpensesList.module.css';

/**
 * @author
 * @function ExpensesList
 **/

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return (
      <h2 className={classes.expensesListFallback}> Found no expenses.</h2>
    );
  }

  return (
    <ul className={classes.expensesList}>
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
