import React, { useState } from 'react';
import classes from './Expenses.module.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

/**
 * @author
 * @function Expense
 **/

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  let obj = Object.values(props.expenses);
  console.log(obj);
  let loop = obj.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });
  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.js');
    setFilteredYear(selectedYear);
  };
  return (
    <div className={classes.expenses}>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Card className={classes.expenses}>{loop}</Card>
    </div>
  );
};
export default Expenses;
