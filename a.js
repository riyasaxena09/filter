import ExpenseItem from './ExpenseItem';
import React, { useState } from 'react';
import Card from './card';
import './expense.css';
import ExpenseFilter from './ExpenseFilter';
function Expense(props) {
  const [filteredyear, setFilteredyear] = useState('2020')
  function filterChangeHandler(selectedyear) {
    setFilteredyear(selectedyear);
    console.log(filteredyear);
  }
  const FilteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredyear;
  });
  let content=<h1>no content</h1>
  if(FilteredExpense.length>0)
  {
    content =FilteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
  }
  let a='';
  if(FilteredExpense.length===1){
  a=<h1>Only single Expense here. Please add more..."
</h1>
  }
  return (
    <Card>
      <div className='whole'>
        <ExpenseFilter selected={filteredyear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        {content}
        {a}
      </div>
    </Card>


  );
}
export default Expense;