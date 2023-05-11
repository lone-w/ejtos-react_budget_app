import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [currencyValue, setCurrencyValue]= useState(currency);
    function onCurrencyChange(selectedCurrency) {
        setCurrencyValue(selectedCurrency);
        dispatch({type:'CHG_CURRENCY', payload:selectedCurrency})
    }
    return (
        <div className='alert alert-secondary'>
            <select  
            style={{background:'#6be538'}} 
            value={currencyValue}
            name={'Currency'}
            id="inpuSelectCurrency" 
            onChange={(event) => onCurrencyChange(event.target.value)}>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
                  </select>
        </div>
    );
};
export default Currency;
