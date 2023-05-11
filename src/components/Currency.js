import React, { 
    //useContext,
     useState } from 'react';
//import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    //const { expenses, budget } = useContext(AppContext);
    const [currencyValue, setCurrencyValue]= useState('');
    function onCurrencyChange(selectedCurrency) {
        setCurrencyValue(selectedCurrency);
    }
    return (
        <div className='alert alert-secondary'>
            <select color={'green'}  value={currencyValue} id="inpuSelectCurrency" onChange={(event) => onCurrencyChange(event.target.value)}>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
                  </select>
        </div>
    );
};
export default Currency;
