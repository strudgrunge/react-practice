import React, { useState } from 'react';
import classes from './Expenses.module.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

/**
 * @author
 * @function Expense
 **/

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');
  // let obj = Object.values(props.expenses);
  // console.log(obj);
  // let loop = obj.map((item) => {
  //   return (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   );
  // });
  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.js');
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredYear);

  return (
    <div className={classes.expenses}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <Card className={classes.expenses}>
        <ExpensesList item={filteredExpenses} />
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>})
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* {loop} */}
      </Card>
    </div>
  );
};
export default Expenses;
