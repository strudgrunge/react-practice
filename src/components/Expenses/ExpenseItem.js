import React from 'react';
import classes from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

/**
 * @author
 * @function ExpenseItem
 **/

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={classes.expenseItem}>
        <ExpenseDate date={props.date} />
        <div className={classes.expenseItemDescription}>
          <h2>{props.title}</h2>
          <div className={classes.expenseItemPrice}>$ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
