
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, remaining, dispatch, expenses } = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => 
        total + item.cost
    , 0);

    function onBudgetchange(currentBudgetValue) {
        if(currentBudgetValue<totalExpenses)
        {
            alert("You can not reduce budget value lower than the spending.");
            return;
        }
        if(currentBudgetValue> 20000)
        {
            alert("The value cannot exceed remaining funds  £"+remaining);
            return;
        }
        setBudgetValue(currentBudgetValue);
        dispatch({type:'SET_BUDGET',payload: parseInt(currentBudgetValue)})
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input      required='required'
                        type='number'
                        id='budget'
                        value={budgetValue}
                        style={{ marginLeft: '2px' , size: 10}}
                        step={10}
                        min={0}
                        onChange={(event) => onBudgetchange(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};
export default Budget;