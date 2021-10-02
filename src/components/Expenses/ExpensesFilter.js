import React, { useState } from 'react';
import classes from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => {
  const dateHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expensesFilterControl}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dateHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
