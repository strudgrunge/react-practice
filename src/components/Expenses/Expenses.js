import classes from './Expenses.module.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

/**
 * @author
 * @function Expense
 **/

const Expenses = (props) => {
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
  return <Card className={classes.expenses}>{loop}</Card>;
};
export default Expenses;
