import React from "react";
import './ExpenseFilter.css';
const ExpenseFilter=(props)=>{
const dropdownChangeHandler=(event)=>{
props.onChangeFilter(event.target.value);
}
return (

  <div className='expensebody'>
    <h2>Filter by year</h2>
    <div className="expenses-filter">
      
        <div className="expenses-filter__control">
            <label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2020'>2020</option>
                    <option value='2023'>2023</option>
                    <option value='2021'>2021</option>
                </select>
            </label>
        </div>
    </div>
    </div>
    
);
};
export default ExpenseFilter;